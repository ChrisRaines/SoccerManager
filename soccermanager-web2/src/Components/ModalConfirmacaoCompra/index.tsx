import React, { useContext, useEffect, useState } from "react";
import { ModalStyle } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { api } from "../../Api";
import Context from '../../Context/context';
import Usuario from '../../Interfaces/usuarioInterface';
import Jogador from '../../Interfaces/jogadorInterface';


const ModalConfirmacao = ({ onClose = () => { }, children, idJogador, jogador, handleOpen = () => { }, handleOpenReproved = () => { } }) => {

    const { usuario, setUsuario, jogadores, setJogadores } = useContext(Context);


    async function PatchWalletAndIdUsuarioCompra() {
        try {

            if (jogador.valorJogador <= usuario?.wallet) {

                const saldo = usuario?.wallet - jogador.valorJogador;
                setUsuario(prevState => ({ ...prevState, wallet: saldo }))

                await api.patch<Usuario, any>("/usuarios/updateWallet", {

                    id: usuario?.id,
                    wallet: saldo

                });


                await api.post<Jogador[], any>("/jogadores/comprar", {

                    idJogador: idJogador,
                    idUsuario: usuario?.id

                });

                
                const novosJogadores = jogadores.filter((item) => item.id !== idJogador);
                setJogadores(novosJogadores);


                handleOpen();
                onClose();
                console.log("Deu certo");

            } else {
                handleOpenReproved();
                onClose();
                console.log("Deu Ruim");
            }


        } catch (err) {
            console.log(err)
        }
    }


    return (

        <ModalStyle>

            <div className="modal">
                <CloseIcon onClick={onClose} />

                <div className="content">
                    <div>{children}</div>

                    <div className="botoes">
                        <button className="btnSim" onClick={PatchWalletAndIdUsuarioCompra}>Sim</button>
                        <button onClick={onClose} className="btnNao">Não</button>
                    </div>
                </div>

            </div>

        </ModalStyle>

    );

}

export default ModalConfirmacao;