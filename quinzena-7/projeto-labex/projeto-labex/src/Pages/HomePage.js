import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { goToPublicArea, goToPrivateArea } from "../hooks/Coordinator.js";
import Button from '@mui/material/Button';
import {FooterFixo} from "../constants/constants"

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
    box-shadow: 28px 28px 57px #a6a6a6, -28px -28px 57px #ffffff;
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
    box-shadow: 28px 28px 57px #a6a6a6, -28px -28px 57px #ffffff;
    &:hover {
        
    }
`	
const H2Areas = styled.h2`
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
`

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <CardAreas>
                <CardPublicArea>
                    <H2Areas>🚀 Ver Viagens</H2Areas>
                    <Button variant="contained"  size="large" disableElevation onClick={() => goToPublicArea(navigate)}> Entrar</Button>
                </CardPublicArea>
        
                <CardPrivateArea>
                    <H2Areas>👩‍💻 Área de Admin</H2Areas>
                    <Button variant="contained" size="large" disableElevation onClick={() => goToPrivateArea(navigate)}>Entrar</Button>
                </CardPrivateArea>
            </CardAreas>
            <FooterFixo>
                <p>© 2022 Todos direitos reservados.</p>
            </FooterFixo>
        </div>
    )
}

export default HomePage;