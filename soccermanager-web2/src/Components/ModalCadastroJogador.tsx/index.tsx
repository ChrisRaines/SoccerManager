import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { ModalStyle } from "./styles";
import { api } from "../../Api";
import fotoJogadorPadrao from '../../imagens/jogadorPadrao.png';

const Modal = ({ onClose = () => { }, children }) => {
    const [nomeJogador, setNomeJogador] = useState("");
    const [idadeJogador, setIdadeJogador] = useState("");
    const [nacionalidadeJogador, setNacionalidadeJogador] = useState("");
    const [clubeJogador, setClubeJogador] = useState("");
    const [posicaoJogador, setPosicaoJogador] = useState("");
    const [overallJogador, setOverallJogador] = useState("");
    const [valorJogador, setValorJogador] = useState("");
    const [fotoJogador, setFotoJogador] = useState("");

    const [cadastrou, setCadastrou] = useState<boolean>(false);


    async function CadastrarJogador(): Promise<void> {
        try {
            const res = await api.post("/jogadores/cadastrar", {

                nomeJogador: nomeJogador,
                idadeJogador: idadeJogador,
                nacionalidadeJogador: nacionalidadeJogador,
                clubeJogador: clubeJogador,
                posicaoJogador: posicaoJogador,
                overallJogador: overallJogador,
                valorJogador: valorJogador,
                fotoJogador: fotoJogador
            });

            console.log(res.data)
            setCadastrou(true);
            console.log(fotoJogador);

        } catch (err) {
            console.log(err)
        }
    }

    function PreviewFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            setFotoJogador(reader.result.toString())
            console.log(reader.result.toString())
        };

        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

    }


    return (
        <ModalStyle>
            <div className="modal">
                <CloseIcon onClick={onClose} />

                {cadastrou ? (<h3 id="cadastrou">Jogador cadastrado com sucesso!</h3>) : (

                    <div className="content">

                        <div className="fotoInfos">

                            <div className="fotoPerfil">
                                <img src={fotoJogador ? fotoJogador : fotoJogadorPadrao} alt="" />
                            </div>

                            <input className="inputFoto"
                                type="file"
                                placeholder="Adicionar imagem"
                                onChange={(e) => { PreviewFile(e.target.files[0]) }}
                            />
                        </div>


                        <div className="infos">
                            <div>
                                <h1>Novo Jogador</h1>
                            </div>
                            <input type="text" placeholder="Nome" onChange={e => setNomeJogador(e.target.value)} />
                            <input type="text" placeholder="Idade" onChange={e => setIdadeJogador(e.target.value)} />
                            <input type="text" placeholder="Nacionalidade" onChange={e => setNacionalidadeJogador(e.target.value)} />
                            <input type="text" placeholder="Clube" onChange={e => setClubeJogador(e.target.value)} />

                            <select name="posicao" id="posicao" onChange={e => setPosicaoJogador(e.target.value)}>
                                <option value="" disabled selected>-- Selecionar Posição --</option>
                                <option value="Meia">Meia</option>
                                <option value="Volante">Volante</option>
                                <option value="Atacante">Zagueiro</option>
                                <option value="Lateral Esquerdo">Lateral Esquerdo</option>
                                <option value="Lateral Direito">Lateral Direito</option>
                                <option value="Centroavante">Centroavante</option>
                                <option value="Ponta Esquerda">Ponta Esquerda</option>
                                <option value="Ponta Direita">Ponta Direita</option>
                                <option value="Goleiro">Goleiro</option>
                            </select>

                            <input type="text" placeholder="Overall" onChange={e => setOverallJogador(e.target.value)} />
                            <input type="number" placeholder="Valor Mercado" onChange={e => setValorJogador(e.target.value)} />

                            <button className="btn" onClick={CadastrarJogador}>Cadastrar</button>
                        </div>

                    </div>
                )}

            </div>
        </ModalStyle>
    );
};


export default Modal;

