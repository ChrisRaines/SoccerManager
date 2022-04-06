import styled from 'styled-components'

export const SideBarStyle = styled.div`

li{
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 30px;
    font-size: 16px;
    font-weight: 500;
    height: 50px;
    width: 158px;
    margin-bottom: 8px;
    text-align: center;
    cursor: pointer;
    color: #ffff;
    border-radius: 7px;
    list-style: none;
    
    span {
        margin-left: 15px;
    }    
}

ul {
    padding: 0;
    padding-left: 6px;
    margin: 0;
}

li:hover{
    border-radius: 7px;
    color: #00FF7F;
        & svg {
            color: #00FF7F;
        }
}


& svg {
    color: #ffff;
    position: relative;
    float: left;
    margin-right: 6px;
}

.container{
    position: fixed;
    margin: 0;
    background-color: #1E212A;
    width: 200px;
    height: 100vh;
}

h1 {
    margin-top: 35px;
    color: #ffff;
    font-size: 25px;
    margin-left: 7px;
}

span {
    color: #00FF7F;
}

.line {
    width: 185px;
    background: #ffff;
    height: 1px;
    margin-left: 6px;
    margin-top: 20px;
}

.menu {
    margin-top: 40px;
}

.userLine {
    background: #ffff;
    width: 185px;
    height: 1px;
    position: fixed;
    bottom: 100px;
    margin-left: 6px;
}

#clubes {
    & svg {
     float: left;
    }
}


#logo {
    cursor: pointer;
}

a {
    text-decoration: none;
}

.dadosUsuario {
    height: 75px;
    width: 178px;
    bottom: 20px;
    position: fixed;
    align-items: center;
    text-align: center;
    float: left;
    margin-left: 15px;
    color: #ffff;
    display: flex;
    justify-content: start;
}

.dadosUsuario p{
    margin-left: 8px;
}


img {
    width: 55px;
    height: 55px;
    border-radius: 30px;
}

#nome {
    font-weight: 500;
}

.valor {
    font-size: 22px;
    font-weight: 600;
    color: #00FF7F;
    margin-left: 10px;
    margin-top: 55px;
}

`
