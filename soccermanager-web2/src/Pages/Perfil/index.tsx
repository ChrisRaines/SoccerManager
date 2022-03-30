import React, { useContext, useEffect, useState } from "react";
import { api } from "../../Api";
import SideBar from "../../Components/SideBar";
import { PerfilStyle } from './styles'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar, SnackbarOrigin } from "@mui/material";
import Context from "../../Context/context";
import Usuario from "../../Interfaces/usuarioInterface";


export interface State extends SnackbarOrigin {
    open?: boolean;
    openError?: boolean;
}


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Perfil() {
    const { usuario, setUsuario } = useContext(Context);
    const [usuarioPerfil, setUsuarioPerfil] = useState<Usuario>();


    async function editarPerfil() {
        try {
            const { data } = await api.put("/usuarios/update", {

                id: usuario.id,
                username: usuario.username,
                email: usuario.email,
                password: usuario.password,
                wallet: usuario.wallet,
                fotoPerfil: usuario.fotoPerfil
            });



        } catch (error) {
            console.log(error);
        }
    }


    const [state, setState] = React.useState<State>({
        open: false,
        openError: false,
        vertical: 'bottom',
        horizontal: 'right',
    });


    const { vertical, horizontal, open, openError } = state;


    const handleOpen = () => {
        setState({ ...state, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };


    function handleClick() {
        editarPerfil();
        handleOpen();
    }
    

    useEffect(() => {
        setUsuarioPerfil(usuario);
    },[])


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
                                <input type="text"
                                    value={usuario?.username}
                                    onChange={e => setUsuario(prevState => ({ ...prevState, username: e.target.value }))}
                                />

                                <p>E-mail:</p>
                                <input type="text"
                                    value={usuario?.email}
                                    onChange={e => setUsuario(prevState => ({ ...prevState, email: e.target.value }))}
                                />

                                <p>Wallet:</p>
                                <input type="number"
                                    value={usuario?.wallet}
                                    onChange={e => setUsuario(prevState => ({ ...prevState, wallet: parseInt(e.target.value) }))}
                                />


                                <p>Password:</p>
                                <input type="password"
                                    value={usuario?.password}
                                    onChange={e => setUsuario(prevState => ({ ...prevState, password: e.target.value }))}
                                />
                            </div>

                            <button onClick={() => handleClick()}>Salvar Alterações</button>

                        </div>

                    </div>

                </div>
            </PerfilStyle>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Perfil alterado com sucesso!
                </Alert>
            </Snackbar>
            
        </>
    );
}

export default Perfil;