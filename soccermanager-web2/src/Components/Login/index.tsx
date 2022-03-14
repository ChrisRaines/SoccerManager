import React, { Dispatch, SetStateAction, useState } from "react";
import SingIn from "../SingIn";
import { LoginStyle } from './styles'
import { Link, useNavigate } from 'react-router-dom';
import { Home } from "@mui/icons-material";
import api, { apiMock } from '../../Api';



export interface LoginProps {
    setPage: Dispatch<SetStateAction<string | undefined>>;
}


const Login: React.FC<LoginProps> = ({ setPage }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState(false);

    let history = useNavigate();

    function changePage() {
        setPage('cadastrar');
    }

    async function Logar(): Promise<void> {
        try {
            const res = await apiMock.get(`/usuarios/?username=${username}&password=${password}`);
            setErro(false);

            if (res.data[0].username) {
                localStorage.setItem('usuario', JSON.stringify(res.data));
                history("/mercado");

            } else {
                setErro(true);
            }

        } catch (err) {
            console.log(err)
            setErro(true);
        }
    }


    return (
        <LoginStyle>
            <div className="menu">
                <Link to="/"> <h1>Soccer<span>Manager</span></h1> </Link>

                <h2>Entrar</h2>


                <div className="form">

                    {erro && <h3>Informações inválidas!</h3>}


                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

                    <button onClick={Logar}>Logar</button>

                    <p onClick={changePage}>Registrar-se</p>


                </div>

            </div>
        </LoginStyle>
    );
}

export default Login;

