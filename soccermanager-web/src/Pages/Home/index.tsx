import React from "react";
import imgHomeBola from "../../imagens/imgHome.jpg";
import Header from '../../Components/Header';
import { HomeStyle } from './styles'
import Footer from "../../Components/Footer";
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <Header />
            <HomeStyle>

                <div className="principal">
                    <div className="content">
                        <h1>Leve seu time para a vitória!</h1>
                    </div>


                    <div className="content">

                        <div className="btn">
                            <Link to='/loginandsingin'>
                                <div className="content2">
                                    <h2 id="jogar">Jogar</h2>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <img id="imagemHome" src={imgHomeBola} alt="" />

                </div>

            </HomeStyle>

            <Footer />

        </>
    );
}