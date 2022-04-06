import styled from 'styled-components'


export const CardStyle = styled.div`

    .container {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        width: 85%;
        height: 100%;
    }

    .search {
        display: flex;
        margin-top: 50px;
            & svg {
                font-size: 45px;
                margin-left: 50px;
                cursor: pointer;
                color: #00FF7F;
            }    
    }


    input {
        margin-left: 35%;
        margin-top: 0px;
        margin-bottom: 75px;

        width: 350px;
        height: 40px;
        padding-left: 10px;
    }


    .cards {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        height: auto;
        margin: 5px;
    }

    .card {
        background: #1E212A;
        width: 365px;
        height: 200px;
        display: flex;
        border-radius: 5px; 
        justify-content: space-between;
        cursor: pointer;
        margin-bottom: 40px;
    }


    .img-compra{
        // background: red;
        width: 160px;
        margin-left: 5px;
    }


    .image {
        width: 109px;
        height: 109px;
        background: black;
        margin-top: 12px;
        margin-left: 12px;
        border-radius: 10px;
        margin-right: 20px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
    }

    .infos {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
    }

    p {
        margin: 0;
        color: #ffff;
        font-weight: 450;
    }

    span {
        font-weight: 300;
    }

    button {
        margin-top: 10px;
        margin-left: 20px;
        width: 95px;
        height: 35px;
        border-radius: 7px;
        border-style: none;
        background: #00FF7F;
        font-weight: 600;
        cursor: pointer;
    }

    button:hover {
        background: #3CB371;
    }
    
`

