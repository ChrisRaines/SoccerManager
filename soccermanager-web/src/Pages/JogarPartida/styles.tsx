import styled from "styled-components";
import estadio from "../../imagens/imgHome2.jpg"

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
        margin-top: 45px;
        margin-left: 14%;
        background-image: url(${estadio});
        background-position: center;

        border-radius: 4px;

        display: flex;
        flex-direction: column;
    }

    button {
        width: 150px;
        height: 40px;
        border-radius: 15px;
        border-style: none;
        background: #00FF7F;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 2px 4px 7px black;

    }

    button:hover {
        background: #00a352;
        color: #ffff;
    }


    .divSuperior {
        width: 100%;
        height: 65%;

        display: flex;
    }

    .myClub {
        width: 41%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 200px;
            height: 200px;
            border-radius: 95px;
            box-shadow: 2px 4px 6px #00FF7F;
        }

        h2 {
            font-size: 25px;
            margin: 1;
            font-weight: 600;
            color: #ffff;

            text-shadow: 1px 4px 4px #00FF7F;
        }
    
    }

    .vs {
        width: 18%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        /* background-color: red; */

        h2 {
            color: #ffff;
            font-size: 50px;
            text-shadow: 1px 5px 4px black;
            margin: 0;
        }

        h3 {
            font-size: 25px;
            text-align: center;
        }

        img {
            width: 215px;
        }
    }

    .adversario {
        width: 41%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 200px;
            height: 200px;
            border-radius: 95px;
            box-shadow: 2px 4px 6px #ff0000;
        }

        h2 {
            font-size: 25px;
            margin: 1;
            font-weight: 600;
            color: #ffff;

            text-shadow: 1px 4px 4px #ff0000;
        }
    }



    .divInferior {
        width: 100%;
        height: 35%;
        display: flex;
        align-items: center;

        .aposta {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        input {
            width: 200px;
            height: 33px;
            margin: 0px;
            border-style: none;
            border-radius: 5px;
            padding-left: 5px;
            font-weight: 500;
            font-size: 15px;
            box-shadow: 2px 4px 7px black;

            
        }

        p {
            margin: 0;
            padding: 0;
            font-size: 30px;
            font-weight: 600;
            color: #ffff;
            text-shadow: 1px 5px 4px black;
        }

        button {
            margin: 0px;
            font-weight: 600;
            font-size: 16px;
        }

    }

    .btn-sortear {
        float: right;
    }

`