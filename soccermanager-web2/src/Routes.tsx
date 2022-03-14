import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginAndSingIn from './Pages/LoginAndSingIn';
import Mercado from './Pages/Mercado';
import MyTeam from './Pages/MyTeam';
import Perfil from './Pages/Perfil';


function Rotas(){
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loginandsingin" element={<LoginAndSingIn />} />
                <Route path='/mercado' element={<Mercado />} />
                <Route path='/myteam' element={<MyTeam />} />
                <Route path='/perfil' element={<Perfil />}/>
            </Routes>
        </Router>
        </>
    );
}

export default Rotas;