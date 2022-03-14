import React, { useState } from "react";
import { ModalStyle } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { apiMock } from "../../Api";



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


const ModalConfirmacao = ({ onClose = () => { }, children, idJogador, jogador, handleOpen = () => { }, handleOpenReproved = () => { } }) => {
    

    let usuario = localStorage.getItem('usuario');
    const usuarioData: Usuario = JSON.parse(usuario)


    async function PatchIdUsuario() {
        try {

            if (jogador.valorJogador <= usuarioData[0].wallet){

                const saldo = usuarioData[0].wallet - jogador.valorJogador;

                await apiMock.patch<Usuario, any>(`/usuarios/${usuarioData[0].id}`, {

                    wallet: saldo
    
                });


                await apiMock.patch<Jogador[], any>(`/jogadores/${idJogador}`, {

                    idUsuario: usuarioData[0].id
    
                });

    
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
                        <button className="btnSim" onClick={PatchIdUsuario}>Sim</button>
                        <button onClick={onClose} className="btnNao">Não</button>
                    </div>
                </div>

            </div>

        </ModalStyle>

    );

}

export default ModalConfirmacao;