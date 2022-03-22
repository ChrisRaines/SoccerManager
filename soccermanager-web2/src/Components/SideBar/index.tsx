import { SideBarStyle } from './styles';
import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PolicyIcon from '@mui/icons-material/Policy';
import SportsIcon from '@mui/icons-material/Sports';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { api } from '../../Api';

interface Usuario {
    id: number,
    username: string,
    email: string,
    password: string
    wallet: number
}

interface SideBarProps {
    selected: string
}

const SideBar: React.FC<SideBarProps> = ({selected}) =>  {

    const [logoff, setLogoff] = useState<boolean>(false);
    const [color, setColor] = React.useState(0);
    const [usuarioState, setUsuarioState] = useState<Usuario>();
    

    let usuario = localStorage.getItem('usuario');
    const usuarioData: Usuario = JSON.parse(usuario)

    function LogoffPage(){
        localStorage.removeItem('usuario');
        setLogoff(true);
    }


    async function atualizarCarteira(){
        try {
            const res = await api.get<Usuario>(`/usuarios/${usuarioData.id}`);
            setUsuarioState(res.data);
            console.log(usuarioState.wallet)

        } catch {
            console.log("Erro ao atualizar carteira")
        }  
    }

    useEffect(() => {
        atualizarCarteira();
    },[])

    
    return (
        <SideBarStyle>
            <div className="container">
                <div className='head'>
                    <Link to='/'><h1 id='logo'><span>Soccer</span>Manager</h1></Link>
                    <div className='line'></div>
                </div>

                <div className='menu'>
                    <ul>
                        <Link to='/myteam'>
                            <li id='myteam'
                                onClick={() => setColor(1)}
                                style={{ backgroundColor: selected === "myteam" ? "#444" : "#1E212A" }}>
                                <GroupsIcon />
                                MyTeam
                            </li>
                        </Link>


                        <Link to='/mercado'>
                            <li id='mercado'
                                onClick={() => setColor(2)}
                                style={{ backgroundColor: selected === "mercado" ? "#444" : "#1E212A" }}>
                                <LocalAtmIcon />
                                Mercado
                            </li>
                        </Link>


                        <li id='clubes' onClick={() => setColor(3)}
                            style={{ backgroundColor: selected === "clube" ? "#444" : "#1E212A" }}>
                            <PolicyIcon />
                            Clubes
                        </li>


                        <li id='jogar' onClick={() => setColor(4)}
                        style={{ backgroundColor: selected ===  "jogar" ? "#444" : "#1E212A" }}>
                            <SportsIcon />
                            Jogar Partida
                        </li>


                        <Link to='/perfil'>
                            <li id='perfil' onClick={() => setColor(5)}
                                style={{ backgroundColor: selected === "perfil" ? "#444" : "#1E212A" }}>
                                <AccountBoxIcon />
                                Perfil
                            </li>
                        </Link>


                        <Link to='/' onClick={LogoffPage}>
                            <li id='sair'>
                                <LogoutIcon />
                                Sair
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className='valor'>${usuarioState?.wallet}</div>

                <div className='userLine'></div>

                <div className='dadosUsuario'>
                    <p id='nome'>{usuarioData.username}</p>
                    <p id='email'>{usuarioData.email}</p>
                </div>

            </div>
        </SideBarStyle>

    );
}

export default SideBar;