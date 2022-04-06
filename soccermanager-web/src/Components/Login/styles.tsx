import styled from 'styled-components'


export const LoginStyle = styled.div`

    .container {
        display: flex;
        justify-content: center;
    }

    .menu {
        background: black;
        width: 400px;
        height: 410px;
        opacity: 0.8;
        float: left;
        margin-top: 10%;
    }

    h1 {
        color: #ffff;
        background: black;
        float: left;
        margin-top: 5%;
        margin-left: 20%;
        width: 300px;
        height: 50px;
    }

    h2 {
        color: #ffff;
        background: black;
        float: left;
        margin-left: 38%;
        width: 75px;
        height: 30px;
        margin-top: 0px;
    }

    h3 {
        color: red;
        font-size: 16px;
        margin-left: 55px;
        width: 180px;
    }

    span {
        color: #00FF7F;
        background: black;
    }

    
    .form {
        background: black;
        float: left;
        margin-top: 0px;
        margin-left: 13%;
        width: 300px;
        height: 250px;

        display: flex;
        flex-direction: column;
        /* align-itens: center; */
        justify-content: space-around;
    }


    input {
        color: #ffff;
        width: 280px;
        height: 35px;
        background: black;
        margin-left: 5px;
        padding-left: 6px;
        border-radius: 10px;
        border-style: solid;
        font-size: 14px;
        font-weight: 550;
    }

    button {
        background: #00FF7F;
        height: 34px;
        width: 130px;
        border-radius: 30px;
        border-style: none;
        font-weight: bold;
        font-size: 14px;
        margin-left: 26%;
        cursor: pointer;
        transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    button:hover {
        transition: .2s ease-out;
        background: #3CB371;
    }

    p {
        background: black;
        color: #ffff;
        height: 34px;
        width: 100px;
        text-align: center;
        text-decoration: underline;
        margin-left: 30%;
        cursor: pointer;
    }
    
`
