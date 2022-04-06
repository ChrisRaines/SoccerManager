import styled from 'styled-components'

export const HeaderStyle = styled.div`

    .header {
        width: 100%;
        height: 100px;
        background: #1E212A;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        // position: fixed;
        z-index: 2;
        // margin-top: -12px;
        box-shadow: 0 1px 6px 0px #00FF7F;
    }

    h1 {
        margin: 0;
        color: #ffff;
        font-size: 40px;
        margin-left: 10%;
    }

    a {
        text-decoration: none;
    }

    span {
        color: #00FF7F;
    }


    .menu {
        margin-right: 10%;
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;  
        padding: 10px
        aling-itens: center;
    }

    p {
        margin: 20px;
        color: #ffff;
        cursor: pointer;
    }


    .btnCadastrar {
        margin: 10px;
        margin-left: 10px;
        padding: 10px;
        background: #00FF7F;
        border-radius: 25px;
        cursor: pointer;
        transition: box-shadow 0.2s ease, transform 0.2s ease;
        border-style: none;
        font-weight: 550;
    }

    .btnCadastrar:hover {
        transition: .2s ease-out;
        background: #3CB371;
    }

`