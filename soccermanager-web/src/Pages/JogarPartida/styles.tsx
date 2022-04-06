import styled from "styled-components";

export const JogarStyle = styled.div`

    background-image: linear-gradient(#D3D3D3, #808080);
    overflow: hidden;

    .container {
        margin: 0;
        width: 95vw;
        margin-left: auto;
        height: 100vh;
        overflow-x: hidden;
        display: flex;
    }

    .content {
        width: 76vw;
        height: 87vh;
        background: #FFFAFA;
        margin-top: 45px;
        margin-left: 14%;

        border-radius: 4px;

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
        padding-left: 5px;
        font-weight: 500;
        font-size: 15px;
    }

    button {
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


    .divSuperior {
        width: 100%;
        height: 65%;

        display: flex;
    }

    .myClub {
        background-color: #00FF7F;
        width: 50%;
        height: 100%;
    }

    .adversrio {
        background-color: purple;
        width: 50%;
        height: 100%;
    }

    .divInferior {
        background-color: red;
        width: 100%;
        height: 35%;
    }

`