import styled from "styled-components";

export const ModalStyle = styled.div`

    .modal {
        margin-top: 5%;
        margin-left: 15%;
        width: 25vw;
        height: 80vh;
        border: solid 5px black;
        background: #555;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        position: fixed;
    }

    & svg {
        margin-top: 5px;
        margin-right: 5px;
        align-self: end;
        color: #00FF7F;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }


    .content {
        width: 100%;
        height: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0px;
        align-items: center;
    }

    .fotoPerfil {
        background: black;
        width: 180px;
        height: 180px;
        margin-top: 10%;
        border-radius: 10px;
            img {
                width: 180px;
                height: 180px;
                border-radius: 10px;
            }
    }

    .infos {
        width: 300px;
        height: 75vh;
        margin-left: 30px;
        margin-top: 20px;
    }


    ul {
        margin: 0;
        padding: 0;
        height: 70%;
    }

    li {
        margin: 0;
        padding: 0;
        color: #ffff;
        margin-bottom: 15px;
        font-weight: 500;
        span {
            font-weight: 300;
        }
    }

    button {
        margin: 0;
        margin-top: 5px;
        width: 120px;
        height: 29px;
        border-radius: 5px;
        border-style: none;
        margin-left: 22%;
        font-weight: 600;
        cursor: pointer;
        background: #00FF7F;
    }

`