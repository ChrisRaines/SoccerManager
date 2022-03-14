import React, { Dispatch, SetStateAction, useState } from "react";
import { SingInStyle } from './styles'
import { Link } from 'react-router-dom';
import { apiMock } from "../../Api";


export interface SingInProps{
    setPage: Dispatch<SetStateAction<string | undefined>>;
}


const SingIn:React.FC<SingInProps> = ({setPage}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [erro, setErro] = useState(false);
    
    function changePage(){
        setPage('logar');
    }


    async function Cadastrar(): Promise<void> {
        try {
            const res = await apiMock.post("/usuarios", {

                username: username,
                email: email,
                password: password,
                wallet: 100000

            });

            changePage();
            setErro(false);

        } catch (err) {
            console.log(err)
            setErro(true);
        }
    }


    return (
        <SingInStyle>
            <div className="menu">
                <Link to="/"> <h1>Soccer<span>Manager</span></h1> </Link>

                <div className="form">
                    <h2>Cadastrar-se</h2>

                    {erro && <h3>Informações inválidas!</h3>}

                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value) }/>
                    <input type="email" placeholder="E-mail"  onChange={e => setEmail(e.target.value) }/>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>

                    <button onClick={Cadastrar}>Cadastrar</button>
                    <p onClick={changePage}>Já tenho cadastro</p>
                
                </div>
            
            </div>
        </SingInStyle>
    );
}

export default SingIn;