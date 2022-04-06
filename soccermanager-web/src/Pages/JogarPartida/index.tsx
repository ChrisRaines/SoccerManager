import SideBar from "../../Components/SideBar";
import { JogarStyle } from "./styles";


function Jogar() {

    return (
        <>
            <SideBar selected="jogar" />
            <JogarStyle>
                <div className="container">
                    <div className="content">

                        <div className="divSuperior">
                            <div className="myClub"></div>
                            <div className="adversrio"></div>
                        </div>

                        <div className="divInferior"></div>

                    </div>
                </div>
            </JogarStyle>

        </>
    );
}

export default Jogar;