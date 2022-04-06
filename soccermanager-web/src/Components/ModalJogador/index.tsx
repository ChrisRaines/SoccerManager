import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { ModalStyle } from "./styles";
import { api } from "../../Api";
import Ronaldinho from '../../imagens/ronaldinho.png';
import Jogador from '../../Interfaces/jogadorInterface';


export interface ModalProps {
    setIsModalVisibleVenda: Dispatch<SetStateAction<boolean>>;
    onClose: () => void;
}


const Modal: React.FC<ModalProps> = ({ onClose = () => { }, children, setIsModalVisibleVenda }) => {

    const [jogador, setJogador] = useState<Jogador>();


    async function GetJogadorById() {
        try {
            const res = await api.get<Jogador, any>(`/jogadores/${children}`);
            setJogador(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err)
        }
    }


    function handleClick() {
        setIsModalVisibleVenda(true)
        onClose();
    }


    useEffect(() => {
        GetJogadorById();
    }, []);


    return (
        <ModalStyle>
            <div className="modal">
                <CloseIcon onClick={onClose} />


                {jogador && (

                    <div className="content">

                        <div>
                            <div className="fotoPerfil">
                                <img src={jogador.fotoJogador} alt="" />
                            </div>
                        </div>

                        <div className="infos">
                            <ul>
                                <li>Nome: <span>{jogador.nomeJogador}</span></li>
                                <li>Idade: <span>{jogador.idadeJogador}</span></li>
                                <li>Nacionalidade: <span>{jogador.nacionalidadeJogador}</span></li>
                                <li>Clube: <span>{jogador.clubeJogador}</span></li>
                                <li>Posição: <span>{jogador.posicaoJogador}</span></li>
                                <li>Overall: <span>{jogador.overallJogador}</span></li>
                                <li>Valor: <span>${jogador.valorJogador}</span></li>
                            </ul>
                            <button className="btn" onClick={e => handleClick()}>Vender Jogador</button>

                        </div>
                    </div>

                )}

            </div>
        </ModalStyle>
    );
};


export default Modal;