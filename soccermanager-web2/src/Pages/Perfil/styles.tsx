import styled from "styled-components";

export const PerfilStyle = styled.div`

    background-image: linear-gradient(#D3D3D3, #808080);
    overflow: hidden;

    .container {
        margin: 0;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        display: flex;
    }

    .content {
        width: 60vw;
        height: 55vh;
        background: blue;
        margin-top: 110px;
        margin-left: 27%;
        border-radius: 10px;
        background: #1E212A;

        display: flex;
        justify-content: space-between;
    }


    .foto-adicionar {
        display: flex;
        flex-direction: column;
        margin-left: 10%;

        p {
            text-decoration: underline;
            margin-top: 10px;
            margin-left: 25%;
            font-weight: 550;
            cursor: pointer;
        }
    }

    .divFotoPerfil {
        width: 230px;
        height: 230px;
        background: black;
        border-radius: 115px;
        margin-top: 16%;
    }

    .infos {
        display: flex;
        flex-direction: column;
        margin-top: 5%;
        margin-right: 10%;
        width: auto;
    }

    .inputs {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 0;
        color: #ffff;
    }

    input {
        margin: 0;
        margin-top: 3px;
        margin-bottom: 30px;
        width: 300px;
        height: 28px;
        border-radius: 5px;
        border-style: none;
    }

    button {
        margin-top: 10px;
        margin-left: 24%;
        width: 150px;
        height: 33px;
        border-radius: 13px;
        border-style: none;
        background: #00FF7F;
        cursor: pointer;
        font-weight: 600;
    }

    button:hover {
        background: #3CB371;
    }

`
