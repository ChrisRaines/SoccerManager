import React from "react";
import imgHomeBola from "../../imagens/imgHome.jpg";
import Header from '../../Components/Header';
import { HomeStyle } from './styles'



export default function Home(){
    return (
        <>
        <Header />

        <HomeStyle>

        <div className="principal">

            <h1>Leve seu time para a vitória!</h1>

            <div>
                <div className="btn"><h2 id="jogar">Jogar</h2></div>
                <img id="imagemHome" src={imgHomeBola} alt="" />
            </div>
            
        </div>

        </HomeStyle>

        </>
    );
}