import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { goToPublicArea, goToPrivateArea } from "../hooks/Coordinator.js";



const CardAreas = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 15%;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const CardPublicArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 370px;
    height: 250px;
    padding: 10px;
    border-radius: 25px;
    box-shadow:  28px 28px 57px #a6a6a6, -28px -28px 57px #ffffff;
    &:hover {
        
    }
`
const CardPrivateArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 370px;
    height: 250px;
    padding: 10px;
    border-radius: 25px;
    box-shadow:  28px 28px 57px #a6a6a6, -28px -28px 57px #ffffff;
    &:hover {
        
    }
`	
const CardButton = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #008CBA;
    font-weight: bolder;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: blue;
        transition: 1.0s;
    }
`
const H2Areas = styled.h2`
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
`

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            
            
            
                <CardAreas>
                    <CardPublicArea>
                        <H2Areas>🚀 Ver Viagens</H2Areas>
                        <CardButton onClick={() => goToPublicArea(navigate)}>Entrar</CardButton>
                    </CardPublicArea>
                    
                    <CardPrivateArea>
                        <H2Areas>👩‍💻 Área de Admin</H2Areas>
                        <CardButton onClick={() => goToPrivateArea(navigate)}>Entrar</CardButton>
                    </CardPrivateArea>
                </CardAreas>
            
            
        </div>
    )
}

export default HomePage;