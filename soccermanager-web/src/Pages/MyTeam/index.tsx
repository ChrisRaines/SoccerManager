import React, { useContext, useEffect, useState } from "react";
import { api } from "../../Api";
import { MyTeamStyle } from './styles'
import SideBar from "../../Components/SideBar";
import campo from "../../imagens/campo.png";
import ModalJogador from "../../Components/ModalJogador";
import Ronaldinho from '../../imagens/ronaldinho.png'
import ModalConfirmacaoVenda from "../../Components/ModalConfirmacaoVenda";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar, SnackbarOrigin } from "@mui/material";
import Usuario from '../../Interfaces/usuarioInterface';
import Jogador from '../../Interfaces/jogadorInterface';
import Context from "../../Context/context";


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

    const { usuario } = useContext(Context);

    let user = localStorage.getItem('usuario');
    const usuarioData: Usuario = JSON.parse(user)
    console.log(usuarioData.id);


    async function GetJogadorByIdUsuario() {
        try {
            const res = await api.get<Jogador[]>(`/jogadores/${usuarioData.id}/usuario`);
            setJogadores(res.data);

        } catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        GetJogadorByIdUsuario();
    }, []);



    function handleClick(props) {
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


    const handleOpen = () => {
        setState({ ...state, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };



    return (
        <>
            <SideBar selected="myteam" />

            <MyTeamStyle>

                <div className="container">
                    <div className="divModal">

                        {isModalVisibleVenda ? <ModalConfirmacaoVenda onClose={() => setIsModalVisibleVenda(false)} handleOpen={handleOpen} idJogador={idJogador} jogadores={jogadores} setJogadores={setJogadores} children={<h1>Gostaria Realmente de vender este jogador?</h1>} /> : null}

                        {isModalVisibleDetails ? <ModalJogador setIsModalVisibleVenda={setIsModalVisibleVenda} onClose={() => setIsModalVisibleDetails(false)} children={idJogador} /> :

                            
                            <div className="jogadores">
                            <p>{usuario?.nomeClube}</p>


                                {jogadores && jogadores.map((jogador) => (

                                    <div className="jogador" key={jogador.id} onClick={e => handleClick(jogador.id)}>
                                        {console.log(idJogador)}

                                        <div className="foto"><img src={jogador.fotoJogador} alt="" /></div>
                                        <ul>
                                            <li>Nome: <span>{jogador.nomeJogador}</span></li>
                                            <li>Posi????o: <span>{jogador.posicaoJogador}</span></li>
                                            <li>Overall: <span>{jogador.overallJogador}</span></li>
                                        </ul>
                                    </div>
                                ))}

                            </div>
                        }

                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Jogador Vendido com sucesso!
                            </Alert>
                        </Snackbar>

                    </div>


                    <div className="campo">
                        <img src={campo} alt="" />
                    </div>

                </div>
            </MyTeamStyle>


        </>
    );
}

export default MyTeam;