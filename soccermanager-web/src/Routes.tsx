import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginAndSingIn from './Pages/LoginAndSingIn';
import Mercado from './Pages/Mercado';
import MyTeam from './Pages/MyTeam';
import Perfil from './Pages/Perfil';
import Usuario from './Interfaces/usuarioInterface';
import Jogador from './Interfaces/jogadorInterface';
import Context from './Context/context';
import Jogar from './Pages/JogarPartida';

function Rotas() {
    const [usuario, setUsuario] = useState<Usuario>();
    const [jogadores, setJogadores] = useState<Jogador[]>();

    return (
        <>
            <Context.Provider value={{ usuario, setUsuario, jogadores, setJogadores }} >
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/loginandsingin" element={<LoginAndSingIn />} />
                        <Route path='/mercado' element={<Mercado />} />
                        <Route path='/myteam' element={<MyTeam />} />
                        <Route path='/perfil' element={<Perfil />} />
                        <Route path='/jogar' element={<Jogar />} /> 
                    </Routes>
                </Router>
            </Context.Provider>
        </>
    );
}

export default Rotas;