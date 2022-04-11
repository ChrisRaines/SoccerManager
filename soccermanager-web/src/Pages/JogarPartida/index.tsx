import { useContext, useEffect, useState } from "react";
import SideBar from "../../Components/SideBar";
import Context from "../../Context/context";
import { JogarStyle } from "./styles";
import vs2 from "../../imagens/vs2.png"
import Jogador from "../../Interfaces/jogadorInterface";
import { api } from "../../Api";
import Usuario from "../../Interfaces/usuarioInterface";
import JogadorPadrao from "../../imagens/jogadorPadrao.png"
import { style } from "@mui/system";


function Jogar() {
    const { usuario, setUsuario } = useContext(Context);

    const [adversarios, setAdversarios] = useState<Usuario[]>();
    const [adversarioSorteado, setAdversarioSorteado] = useState<number>();

    const [valorAposta, setValorAposta] = useState<number>();

    const [myGol, setMyGol] = useState<number>();
    const [adversarioGol, setAdversarioGol] = useState<number>();
    const [resultado, setResultado] = useState("");


    let user = localStorage.getItem('usuario');
    const usuarioData: Usuario = JSON.parse(user)


    async function GetAllAdversarios() {
        try {
            const res = await api.get<Jogador[], any>(`/usuarios`);
            setAdversarios(res.data);

        } catch (err) {
            console.log(err)
        }
    }

    function GetRandomNumber(min, max) {
        return Math.random() * (max - min) + min
    }



    function SelecionarAdversario() {
        let numAleatorio = GetRandomNumber(0, (adversarios.length - 1))
        const numeroInteiro = Math.round(numAleatorio)
    

        // roda a lista de adversarios e apaga o usuario que esta logado no localStorage
        for (let i = 0; i < adversarios.length; i++) {
            if(adversarios[i].id === usuarioData.id){
                adversarios.splice(i, 1)
            }     
        }

        // Evita que o mesmo numero seja sorteado duas vezes seguidas
        if (numeroInteiro === adversarioSorteado){
            SelecionarAdversario()

        } else if (numeroInteiro === undefined){
            SelecionarAdversario()

        } else {
            setAdversarioSorteado(numeroInteiro)
        }


    }


    async function UpdateWallet(valor: number){
        try {

            await api.patch<Usuario, any>("/usuarios/updateWallet", {

                id: usuario?.id,
                wallet: valor
    
            });

        } catch(err) {
            console.log(err)
        }
        
    }

    function Apostar() {
        const golMyTeam = GetRandomNumber(0, 5)
        const golMyTeamInteiro = Math.round(golMyTeam)
        setMyGol(golMyTeamInteiro)

        const golAdversario = GetRandomNumber(0, 5)
        const golAdversarioInteiro = Math.round(golAdversario)
        setAdversarioGol(golAdversarioInteiro)

    
        if(golMyTeamInteiro > golAdversarioInteiro){
            setResultado("Você venceu!")
            const valorGanho = ((valorAposta * 2) + usuario.wallet)
            setUsuario(prevState => ({ ...prevState, wallet: valorGanho}))
            UpdateWallet(valorGanho)

        } else if (golAdversarioInteiro > golMyTeamInteiro){
            setResultado("Você perdeu!")
            const valorPerdido = (usuario.wallet - valorAposta)
            setUsuario(prevState => ({ ...prevState, wallet: valorPerdido}))
            UpdateWallet(valorPerdido)
            
        } else {
            setResultado("Empate!")
        }

    }

    function HandleClickAposta(){
        if(adversarioSorteado === undefined){
            setResultado("Selecione um adversario!")

        } else if(valorAposta > usuario.wallet) {
            setResultado("Saldo insuficiente para aposta!")


        } else if (valorAposta <= 0 || valorAposta == undefined || valorAposta == null) {
            setResultado("Valor de aposta invalido!")

        } else {
            Apostar();
        }
    }


    useEffect(() => {
        GetAllAdversarios();
    }, [])


    return (
        <>
            <SideBar selected="jogar" />
            <JogarStyle>
                <div className="container">
                    <div className="content">

                        <div className="divSuperior">

                            <div className="myClub">
                                <h2>{usuario?.nomeClube}</h2>
                                <img className="fotoUsuario" src={usuario?.fotoPerfil} alt="" />
                                <h2>{usuario?.username}</h2>
                            </div>

                            <div className="vs">
                                <img src={vs2} alt="" />
                                <h2>{myGol} X {adversarioGol}</h2>
                                <h3>{resultado}</h3>
                            </div>

                            
                            {adversarioSorteado !== undefined ? (
                                <div className="adversario">
                                    <h2>{adversarios[adversarioSorteado]?.nomeClube}</h2>
                                    <img className="fotoUsuario" src={adversarios[adversarioSorteado]?.fotoPerfil} alt="" />
                                    <h2>{adversarios[adversarioSorteado]?.username}</h2>
                                    <button onClick={SelecionarAdversario} className="">Sortear adversario</button>
                                </div>

                            ) : (

                                <div className="adversario">
                                    <h2>Clube</h2>
                                    <img className="fotoUsuario" src={JogadorPadrao} alt="" />
                                    <h2>Username</h2>
                                    <button onClick={SelecionarAdversario} className="">Sortear adversario</button>
                                </div>)}


                        </div>

                        <div className="divInferior">
                            <div className="aposta">
                                <p>Aposta</p>
                                <input type="number" placeholder="Insira um valor de aposta" onChange={e => setValorAposta(parseInt(e.target.value))} name="" id="" />
                                <button onClick={HandleClickAposta}>Jogar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </JogarStyle>

        </>
    );
}

export default Jogar;