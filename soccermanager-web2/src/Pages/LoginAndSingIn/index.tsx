import React, { useState } from "react";
import './Style.css';
import Login from "../../Components/Login";
import SingIn from "../../Components/SingIn"
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { IconStyle } from "./inonStyle"
import { Link } from 'react-router-dom';



function LoginAndSingIn() {
    const [page, setPage] = useState('logar');

    return (
            <div id="containerLogin">
                <IconStyle>
                    <Link to='/'> <FastRewindIcon/> </Link>
                </IconStyle>
                {page === 'logar' ? <Login setPage={setPage} /> : <SingIn setPage={setPage} />}
            </div>
    );
}

export default LoginAndSingIn;