import styled from 'styled-components'


export const HomeStyle = styled.div`

    .principal {
        width: 100%;
        height: 100%;
        
        margin-top: 6px;
        background: black;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content2 {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    a {
        text-decoration: none;
        color: #fff;
    }

    img {
        width: 100%;
        height: 100%;
        margin: 0;
        opacity: 0.5;
    }


    h1 {
        font-style: normal;
        font-weight: 800;
        font-size: 60px;
        line-height: 76px;
        color: #FFFFFF;
        z-index: 1;
        margin-top: 11%;
        margin-left: auto;
        margin-right: auto;
    
        position: absolute;


        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h2 {
        margin: 0;
        padding: 0;
    }


    .btn {
        background: #00FF7F;
        position: absolute;
        margin-top: 20%;
        color: #ffff;
        z-index: 1;
        width: 200px;
        height: 65px;
        align-items: center;
        border-radius: 45px;

        transition: box-shadow 0.2s ease, transform 0.2s ease;
        border-style: none;
        font-weight: 550;
        cursor: pointer;
    }


    .btn:hover {
        transition: .2s ease-out;
        background: #2b8a55;
    }


`