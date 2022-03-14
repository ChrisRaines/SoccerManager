import React from "react";
import SideBar from "../../Components/SideBar";
import { PerfilStyle } from './styles'

function Perfil() {
    return (
        <>
            <SideBar selected="perfil" />
            <PerfilStyle>
                <div className="container">

                    <div className="content">

                        <div className="foto-adicionar">
                            <div className="divFotoPerfil">
                                <img src="" alt="" />
                            </div>
                            <p>Adicionar foto</p>
                        </div>


                        <div className="infos">
                            <div className="inputs">
                                <p>Username:</p>
                                <input type="text" />
                                <p>E-mail:</p>
                                <input type="text" />
                                <p>Wallet:</p>
                                <input type="text" />
                            </div>

                            <button>Salvar Alterações</button>
                        </div>

                    </div>
                </div>
            </PerfilStyle>
        </>
    );
}

export default Perfil;