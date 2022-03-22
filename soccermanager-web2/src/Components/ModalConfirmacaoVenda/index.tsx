import React, { useEffect, useState } from "react";
import { ModalStyle } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { api } from "../../Api";


interface Jogador {
    nomeJogador: string;
    idadeJogador: number;
    nacionalidadeJogador: string;
    clubeJogador: string;
    posicaoJogador: string;
    overallJogador: number;
    valorJogador: number;
    fotoJogador: string;
    idUsuario: number;
    id: number;
}

interface Usuario {
    id: number,
    username: string,
    email: string,
    password: string
    wallet: number
}


const ModalConfirmacaoVenda = ({ onClose = () => { }, children, idJogador, handleOpen = () => { }, handleOpenReproved = () => { } }) => {
    

    let usuario = localStorage.getItem('usuario');
    const usuarioData: Usuario = JSON.parse(usuario)

    const [jogador, setJogador] = useState<Jogador>();
    const [usuarioStateCarteira, setUsuarioStateCarteira] = useState<Usuario>();


    async function GetJogadorById(){
        try {
            const res = await api.get<Jogador>(`/jogadores/${idJogador}`)
            setJogador(res.data);

        }  catch (err) {
            console.log(err)
        }
    }


    async function atualizarCarteira(){
        try {
            const res = await api.get<Usuario>(`/usuarios/${usuarioData.id}`);
            setUsuarioStateCarteira(res.data);

        } catch {
            console.log("Erro ao atualizar carteira")
        }  
    }


    useEffect(() => {
        GetJogadorById()
        atualizarCarteira()
    }, []);


    async function PatchWalletAndIdUsuarioVenda() {
        try {
                
                console.log(jogador.valorJogador)
                const saldo = usuarioStateCarteira.wallet + jogador.valorJogador;

                await api.patch<Usuario, any>(`/usuarios/updateWallet`, {

                    id: usuarioData.id,
                    wallet: saldo
    
                });


                await api.patch<Jogador[], any>(`/jogadores/vender`, {

                    idJogador: idJogador,
                    idUsuario: usuarioData.id
    
                });

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