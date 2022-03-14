import styled from "styled-components";

export const ModalStyle = styled.div`

    .modal {
        margin-top: -20px;
        margin-left: 31%;
        width: 50vw;
        height: 90vh;
        border: solid 5px black;
        background: #555;
        z-index: 10;
        position: fixed;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    & svg {
        margin-left: 100px;
        margin-top: 5px;
        align-self: end;
    }


    h1 {
        width: 220px;
        margin: 0;
        margin-left: 14%;
        color: #00FF7F;
    }

    .content {
        widht: 100vw;
        height: 82vh;
        display: flex;
        justify-content: space-between;
        margin: 0px;
    }

    .fotoPerfil {
        background: black;
        width: 215px;
        height: 215px;
        margin-left: 50px;
        margin-top: 40px;
        border-radius: 15px;
    }

    p {
        margin-left: 34%;
        color: #ffff;
        text-decoration: underline;
        cursor: pointer;
    }

    .infos {
        width: 300px;
        height: 75vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-right: 50px;
        margin-top: 25px;
    }

    input {
        width: 284px;
        height: 33px;
        border-radius: 5px;
        margin: 0;
        border-style: none;
    }

    button {
        width: 150px;
        height: 30px;
        margin-left: 26%;
        border-radius: 10px;
        border-style: none;
        cursor: pointer;
        background: #00FF7F;
        font-weight: 600;
    }

    button:hover {
        background: #3CB371;
    }


    #cadastrou {
        font-size: 35px;
        margin-top: 30%;
        text-align: center;
        color: #00FF7F;
    }

    select {
        width: 297px;
        height: 35px;
        padding-left: 5px;
        border-radius: 5px;
    }



`