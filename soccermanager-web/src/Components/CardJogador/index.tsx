import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { CardStyle } from './styles'
import { api } from "../../Api";
import Jogador from '../../Interfaces/jogadorInterface'
import Context from "../../Context/context";


export interface CardJogadorProps {
    setIsModalVisible: Dispatch<SetStateAction<boolean>>;
    setIdJogador: Dispatch<SetStateAction<number>>;
    setJogador: Dispatch<SetStateAction<Jogador>>;
}


const CardJogador: React.FC<CardJogadorProps> = ({ setIsModalVisible, setIdJogador, setJogador}) => {
    
    const { jogadores, setJogadores } = useContext(Context);

    console.log("jog", jogadores)


    async function GetJogadoresByIdUsuarioNull() {
        try {
            
            const res = await api.get<Jogador[], any>(`/jogadores/mercado`);
            setJogadores(res.data);

        } catch (err) {
            console.log(err)
        }
    }


    function modalAndIdJogador(idJog, jog){
        setIdJogador(idJog);
        setIsModalVisible(true);
        setJogador(jog);
    }
    
    useEffect(() => {
        GetJogadoresByIdUsuarioNull();
    }, []);

    

    return (
        <CardStyle>

            <div className="container">

                <div className="cards">

                    {jogadores && jogadores.map((jogador) => (

                        <div className="card">

                            <div className="img-compra">
                                <div className="image">
                                    <img src={jogador.fotoJogador} alt="" />
                                </div>
                                <button className="btn" onClick={e => modalAndIdJogador(jogador.id, jogador)}>Comprar Jogador</button>
                            </div>

                            <div className="infos">
                                <p id="nome">Nome: <span>{jogador.nomeJogador}</span></p>
                                <p id="idade">Idade: <span>{jogador.idadeJogador}</span></p>
                                <p id="nascionalidade">Nacionalidade: <span>{jogador.nacionalidadeJogador}</span></p>
                                <p id="clube">Clube: <span>{jogador.clubeJogador}</span></p>
                                <p id="posicao">Posi????o: <span>{jogador.posicaoJogador}</span></p>
                                <p id="over">Overall: <span>{jogador.overallJogador}</span></p>
                                <p id="valor">Valor: <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(jogador.valorJogador)}</span></p>
                            </div>

                        </div>

                    ))}

                </div>

            </div>


        </CardStyle >

    );
}

export default CardJogador;