import styled from "styled-components";

export const ModalStyle = styled.div`

    .modal {
        margin-top: 12%;
        margin-left: 20%;
        width: 40vw;
        height: 35vh;
        border: solid 5px black;
        background: #555;
        position: fixed;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        z-index: 10;
    }

    & svg {
        margin-left: 100px;
        margin-top: 5px;
        align-self: end;
        cursor: pointer;
    }

    .content {
        height: 27vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0px;
        text-align: center;
    }

    .botoes {
        height: auto;
        display: flex;
        justify-content: space-around;
    }

    button {
        margin: 0;
        padding: 0;
        width: 120px;
        height: 33px;
        border-style: none;
        border-radius: 5px;
        font-weight: 800;
        cursor: pointer;
    }


    .btnSim {
        background: #00FF7F;
        margin-left: 115px;
    }

    .btnSim:hover {
        background: #3CB371;
    }

    .btnNao {
        background: #DC143C;
        margin-right: 115px;
    }

    .btnNao:hover {
        background: #B22222;
    }

`