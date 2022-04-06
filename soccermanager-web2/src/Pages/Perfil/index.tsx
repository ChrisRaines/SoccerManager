import React, { useContext, useEffect, useState } from "react";
import { api } from "../../Api";
import SideBar from "../../Components/SideBar";
import { PerfilStyle } from './styles'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar, SnackbarOrigin } from "@mui/material";
import Context from "../../Context/context";
import Usuario from "../../Interfaces/usuarioInterface";
import fotoUsuarioPadrao from "../../imagens/usuarioPadrao.png"


interface UsuarioUpdateDto {
    id: number,
    username: string,
    email: string,
    password: string,
    wallet: number,
    nomeClube: string,
    fotoPerfil: string
}


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
    const [usuarioPerfil, setUsuarioPerfil] = useState<UsuarioUpdateDto>();
    const [fotoUsuario, setFotoUsuario] = useState("");


    let user = localStorage.getItem('usuario');
    const usuarioData: Usuario = JSON.parse(user)


    async function GetUsuarioById() {
        try {
            const res = await api.get<Usuario, any>(`/usuarios/${usuarioData.id}`);
            setUsuario(res.data);
            setUsuarioPerfil(res.data);

        } catch (err) {
            console.log(err)
        }
    }


    async function editarPerfil() {
        try {
            const { data } = await api.put("/usuarios/update", {

                id: usuarioPerfil.id,
                username: usuarioPerfil.username,
                email: usuarioPerfil.email,
                password: usuarioPerfil.password,
                wallet: usuarioPerfil.wallet,
                nomeClube: usuarioPerfil.nomeClube,
                fotoPerfil: usuarioPerfil.fotoPerfil
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
        setUsuario(usuarioPerfil);
        editarPerfil();
        handleOpen();
    }


    function PreviewFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            setUsuarioPerfil(prevState => ({ ...prevState, fotoPerfil: reader.result.toString() }))
            setFotoUsuario(reader.result.toString())
            console.log(reader.result.toString())
        };

        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

    }


    const reload = useEffect(() => {
        GetUsuarioById();
    }, [])


    return (
        <>
            <SideBar selected="perfil" />
            <PerfilStyle>

                <div className="container">

                    <div className="divPerfil">

                        <div className="content">

                            <div className="foto-adicionar">
                                <div className="divFotoPerfil">
                                    <img src={(fotoUsuario ? fotoUsuario : usuarioPerfil?.fotoPerfil) || fotoUsuarioPadrao} alt="" />
                                </div>

                                <input className="inputFoto"
                                    type="file"
                                    onChange={(e) => { PreviewFile(e.target.files[0]) }}
                                />

                            </div>


                            <div className="infos">
                                <div className="inputs">

                                    <p>Username:</p>
                                    <input type="text"
                                        value={usuarioPerfil?.username}
                                        onChange={e => setUsuarioPerfil(prevState => ({ ...prevState, username: e.target.value }))}
                                    />

                                    <p>E-mail:</p>
                                    <input type="text"
                                        value={usuarioPerfil?.email}
                                        onChange={e => setUsuarioPerfil(prevState => ({ ...prevState, email: e.target.value }))}
                                    />

                                    <p>Wallet:</p>
                                    <input type="number"
                                        value={usuarioPerfil?.wallet}
                                        onChange={e => setUsuarioPerfil(prevState => ({ ...prevState, wallet: parseInt(e.target.value) }))}
                                    />

                                    <p>Nome do Clube:</p>
                                    <input type="text"
                                        value={usuarioPerfil?.nomeClube}
                                        placeholder="Insira o nome do clube"
                                        onChange={e => setUsuarioPerfil(prevState => ({ ...prevState, nomeClube: e.target.value }))}
                                    />


                                    <p>Password:</p>
                                    <input type="password"
                                        value={usuarioPerfil?.password}
                                        onChange={e => setUsuarioPerfil(prevState => ({ ...prevState, password: e.target.value }))}
                                    />
                                </div>

                                <button onClick={() => handleClick()}>Salvar Alterações</button>

                            </div>

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