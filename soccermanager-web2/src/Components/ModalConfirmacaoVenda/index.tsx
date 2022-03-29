import React, { useContext, useEffect, useState } from "react";
import { ModalStyle } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { api } from "../../Api";
import Context from "../../Context/context";
import Jogador from '../../Interfaces/jogadorInterface';
import Usuario from '../../Interfaces/usuarioInterface';


const ModalConfirmacaoVenda = ({ onClose = () => { }, children, idJogador, handleOpen = () => { }, jogadores, setJogadores }) => {
    

    const [jogador, setJogador] = useState<Jogador>();
    const { usuario, setUsuario } = useContext(Context);


    async function GetJogadorById(){
        try {
            const res = await api.get<Jogador>(`/jogadores/${idJogador}`)
            setJogador(res.data);

        }  catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        GetJogadorById()
    }, []);


    async function PatchWalletAndIdUsuarioVenda() {
        try {
            
                const saldo = usuario?.wallet + jogador.valorJogador;
                setUsuario(prevState => ({ ...prevState, wallet: saldo }))

                await api.patch<Usuario, any>(`/usuarios/updateWallet`, {

                    id: usuario?.id,
                    wallet: saldo
    
                });


                await api.post<Jogador[], any>(`/jogadores/vender`, {

                    idJogador: idJogador,
                    idUsuario: usuario?.id
    
                });


                const novosJogadores = jogadores.filter((item) => item.id !== idJogador);
                setJogadores(novosJogadores);
                

                handleOpen();
                onClose();
                console.log("Deu certo");
            

        } catch (err) {
            console.log(err);
        }
    }


    return (

        <ModalStyle>

            <div className="modal">
                <CloseIcon onClick={onClose} />

                <div className="content">
                    <div>{children}</div>

                    <div className="botoes">
                        <button className="btnSim" onClick={PatchWalletAndIdUsuarioVenda}>Sim</button>
                        <button onClick={onClose} className="btnNao">Não</button>
                    </div>
                </div>

            </div>

        </ModalStyle>

    );

}

export default ModalConfirmacaoVenda;