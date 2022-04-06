import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { LoginStyle } from './styles'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../Api';
import Context from "../../Context/context";


export interface LoginProps {
    setPage: Dispatch<SetStateAction<string | undefined>>;
}


const Login: React.FC<LoginProps> = ({ setPage }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState(false);

    const { setUsuario } = useContext(Context);


    let history = useNavigate();

    function changePage() {
        setPage('cadastrar');
    }


    async function Logar(): Promise<void> {
        try {
            const res = await api.post("/usuarios/logar", {

                username: username,
                password: password

            });
            console.log(res);
            setErro(false);

            if (res.data.username) {
                localStorage.setItem('usuario', JSON.stringify(res.data));
                setUsuario(res.data);
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
            <div className="container">
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

            </div>
        </LoginStyle>
    );
}

export default Login;

