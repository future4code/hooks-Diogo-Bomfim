import {CardAreas, CardPublicArea, CardPrivateArea, H2Areas} from "../HomePage/styles"
import {useNavigate} from "react-router-dom";
import { goToPublicArea, goToPrivateArea } from "../../hooks/Coordinator";
import Button from '@mui/material/Button';
import {FooterFixo} from "../../constants/constants"

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