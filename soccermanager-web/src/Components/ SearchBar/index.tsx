import React, { useContext, useEffect, useState } from "react";
import { SearchBarStyle } from './styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from "../ModalCadastroJogador.tsx";
import Context from "../../Context/context";
import Jogador from "../../Interfaces/jogadorInterface";
import { api } from "../../Api";


function SearchBar() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const { jogadores, setJogadores } = useContext(Context);
    const oldJogadores = jogadores;

    const [searchTerm, setSearchTerm] = useState("");
    const [jogadoresFiltrados, setJogadoresFiltrados] = useState<Jogador[]>([])

    console.log('oldJogadores', oldJogadores)


    async function GetJogadoresByIdUsuarioNull() {
        try {

            const res = await api.get<Jogador[], any>(`/jogadores/mercado`);
            setJogadores(res.data);

        } catch (err) {
            console.log(err)
        }
    }


    function filtrar() {
        try {

            if (searchTerm.length > 0) {
                const jogador = jogadores.map(jogador => jogador).filter(item => item.nomeJogador.toLowerCase().includes(searchTerm.toLowerCase()))
                setJogadoresFiltrados(jogador)

                if (jogadoresFiltrados.length > 0) {
                    setJogadores(jogadoresFiltrados)
                }
            } else {
                GetJogadoresByIdUsuarioNull();
            }


        } catch (err) {
            console.error(err);
        }

    }

    useEffect(() => {
        filtrar();
    }, [searchTerm])


    return (
        <SearchBarStyle>
            <div className="search">
                {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} children={<h1>teste</h1>} /> : null}

                <input type="text"
                    value={searchTerm}
                    placeholder="Pesquisar Jogador"
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />

                <AddCircleIcon onClick={() => setIsModalVisible(true)} />
            </div>
        </SearchBarStyle>
    );
}

export default SearchBar;