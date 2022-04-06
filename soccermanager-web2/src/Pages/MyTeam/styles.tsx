import styled from "styled-components";

export const MyTeamStyle = styled.div`

    background-image: linear-gradient(#D3D3D3, #808080);
    overflow: hidden;

    .container {
        margin: 0;
        width: 95vw;
        height: 100vh;
        overflow-x: hidden;
        display: flex;
        justify-content: space-between;
        margin-left: auto;
    }

    .jogadores{
        margin-left: 10%;
        margin-top: 5%;
        padding-left: 15px;
        padding-top: 10px;
        background: #1E212A;
        width: 31%;
        height: 80vh;
        border-radius: 10px;
        
        display: flex;
        flex-direction: column;
        overflow: auto;      
        position: fixed;
    }

    
    .jogador {
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 5px;
        width: 95%;
        height: 75px;
        background: #C0C0C0;
        border-radius: 5px;
        display: flex;
        cursor: pointer;
            li {
                color: black;
            }
    }

    .jogador:hover{
        background: #A9A9A9;
    }

    .foto {
        width: 65px;
        height: 65px;
        background: black;
        margin-left: 30px;
        border-radius: 5px;
        img {
            width: 65px;
            height: 65px;
            border-radius: 5px;
        }
    }


    ul {
        margin: 0;
        padding: 0px;
        padding-top: 6px;
        padding-left: 15px;
    }


    li {
        list-style: none;
        // color: #black;
        font-weight: 500;
    }
    
    .campo {
        height: 75%;
        width: 32vw;
        display: flex;
        justify-content: center;
        margin-right: 9%;
        margin-top: 7%;
    }

    span {
        font-weight: 370;
    }

    .divModal {
        margin: 0;
        padding: 0;

        margin-left: 7%;
        z-index: 10;
    }

}

` 