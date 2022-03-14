import React, { useEffect, useState } from "react";
import api, { apiMock } from "../../Api";
import { MyTeamStyle } from './styles'
import SideBar from "../../Components/SideBar";
import campo from "../../imagens/campo.png";
import ModalJogador from "../../Components/ModalJogador";
import Ronaldinho from '../../imagens/ronaldinho.png'
import ModalConfirmacaoVenda from "../../Components/ModalConfirmacaoVenda";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar, SnackbarOrigin } from "@mui/material";



interface Usuario {
    id: number,
    username: string,
    email: string,
    password: string
    wallet: number
}


interface Jogador {
    nomeJogador: string;
    idadeJogador: number;
    nacionalidadeJogador: string;
    clubeJogador: string;
    posicaoJogador: string;
    overallJogador: number;
    fotoJogador: string;
    id: number;
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



function MyTeam() {

    const [isModalVisibleDetails, setIsModalVisibleDetails] = useState<boolean>(false);
    const [isModalVisibleVenda, setIsModalVisibleVenda] = useState<boolean>(false);

    const [idJogador, setIdJogador] = useState<number>();
    const [jogadores, setJogadores] = useState<Jogador[]>([]);


    let usuario = localStorage.getItem('usuario');
    const usuarioData: Usuario = JSON.parse(usuario)
    console.log(usuarioData.id);

    async function GetJogadores() {
        try {
            const res = await apiMock.get<Jogador[]>(`/jogadores?idUsuario=${usuarioData[0].id}`);
            setJogadores(res.data);
        
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        GetJogadores();
    }, []);



    function HandleClick(props) {
        setIdJogador(props);
        setIsModalVisibleDetails(true);
    }



    const [state, setState] = React.useState<State>({
        open: false,
        openError: false,
        vertical: 'bottom',
        horizontal: 'right',
    });


    const { vertical, horizontal, open, openError } = state;


    const handleClose = () => {
        setState({ ...state, open: false });
    };


    const handleOpen = () => {
        setState({ ...state, open: true });
    };


    const handleOpenReproved = () => {
        setState({ ...state, openError: true });
    }

    const handleCloseReproved = () => {
        setState({ ...state, openError: false });
    };



    return (
        <>
            <SideBar selected="myteam" />

            <MyTeamStyle>

                <div className="container">
                    <div className="divModal">

                        {isModalVisibleVenda ? <ModalConfirmacaoVenda onClose={() => setIsModalVisibleVenda(false)} handleOpen={handleOpen} handleOpenReproved={handleOpenReproved} idJogador={idJogador} children={<h1>Gostaria Realmente de vender este jogador?</h1>}/> : null}

                        {isModalVisibleDetails ? <ModalJogador setIsModalVisibleVenda={setIsModalVisibleVenda} onClose={() => setIsModalVisibleDetails(false)} children={idJogador} /> :

                            <div className="jogadores">

                                {jogadores && jogadores.map((jogador) => (

                                    <div className="jogador" key={jogador.id} onClick={e => HandleClick(jogador.id)}>
                                        {console.log(idJogador)}

                                        <div className="foto"><img src={Ronaldinho} alt="" /></div>
                                        <ul>
                                            <li>Nome: <span>{jogador.nomeJogador}</span></li>
                                            <li>Posição: <span>{jogador.posicaoJogador}</span></li>
                                            <li>Overall: <span>{jogador.overallJogador}</span></li>
                                        </ul>
                                    </div>
                                ))}

                            </div>
                        }
                    </div>


                    <div className="campo"><img src={campo} alt="" /></div>

                </div>
            </MyTeamStyle>


        </>
    );
}

export default MyTeam;