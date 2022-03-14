import React, { useState } from "react";
import { MercadoStyle } from './styles'
import SideBar from "../../Components/SideBar";
import CardJogador from "../../Components/CardJogador";
import SearchBar from "../../Components/ SearchBar";
import ModalConfirmacao from "../../Components/ModalConfirmacaoCompra";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar, SnackbarOrigin } from "@mui/material";


interface Jogador {
    nomeJogador: string;
    idadeJogador: number;
    nacionalidadeJogador: string;
    clubeJogador: string;
    posicaoJogador: string;
    overallJogador: number;
    valorJogador: number;
    fotoJogador: string;
    idUsuario: number;
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



function Mercado() {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [idJogador, setIdJogador] = useState<number>();
    const [jogador, setJogador] = useState<Jogador>();


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
            <MercadoStyle>

                <div className="container">
                    <SideBar selected="mercado" />
                    <SearchBar />
                    {isModalVisible ? <ModalConfirmacao onClose={() => setIsModalVisible(false)} idJogador={idJogador} jogador={jogador} handleOpen={handleOpen} handleOpenReproved={handleOpenReproved} children={<h1>Gostaria realmente de comprar esse jogador?</h1>} /> : null}

                    <CardJogador setIsModalVisible={setIsModalVisible} setIdJogador={setIdJogador} setJogador={setJogador} />
                </div>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Jogador comprado com sucesso!
                    </Alert>
                </Snackbar>

                <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseReproved} anchorOrigin={{ vertical, horizontal }} key={"2"}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Saldo insuficiente para efetuar a compra!
                    </Alert>
                </Snackbar>

            </MercadoStyle>
        </>
    );
}

export default Mercado;