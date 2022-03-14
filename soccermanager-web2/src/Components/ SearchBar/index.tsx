import React, { useState } from "react";
import { SearchBarStyle } from './styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from "../ModalCadastroJogador.tsx";


function SearchBar() {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    return (
        <SearchBarStyle>
            <div className="search">
                {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} children={<h1>teste</h1>} /> : null}

                <input type="text" placeholder="Pesquisar Jogador" />
                <AddCircleIcon onClick={() => setIsModalVisible(true)} />
            </div>
        </SearchBarStyle>
    );
}

export default SearchBar;