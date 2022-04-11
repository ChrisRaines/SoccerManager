import React from "react";
import { HeaderStyle } from './styles'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <HeaderStyle>
            <div className="header">
                <h1><span>Soccer</span>Manager</h1>

                <div className="menu">
                    <Link to='/sobre'> <p>Sobre</p> </Link>
                    <Link to='/loginandsingin'> <p>Login</p> </Link>
                    <Link to='/loginandsingin'>
                        <div className="btnCadastrar">Cadastrar-se</div>
                    </Link>
                </div>

            </div>
        </HeaderStyle>
    );
}

export default Header;