import styled from "styled-components";
import {Header, Footer} from "../Constants/ConstantStyles.js"
import {useNavigate} from "react-router-dom";

const CardAreas = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 200px;
    text-align: center;
`
const CardPublicArea = styled.div`
    width: 250px;
    height: 150px;
    background-color: red;
    padding: 10px;
    border-radius: 25px;
    &:hover {
        
    }
`

const CardPrivateArea = styled.div`
    width: 250px;
    height: 150px;
    background-color: red;
    padding: 10px;
    border-radius: 25px;
    &:hover {
        
    }
`	
const CardButton = styled.button`
    width: 100px;
    background-color: red;
    border: 1.5px solid black;
    border-radius: 20px;
    cursor: pointer;
`

const HomePage = () => {
    const navigate = useNavigate()

    const goToPublicArea = () => {
        navigate("/trips/list")
    }

    const goToPrivateArea = () => {
        navigate("/admin/trips/list")
    }


    return (
        <div>
            <Header>
                <h1>Header</h1>
            </Header>
            

            <CardAreas>
                <CardPublicArea>
                    <h2>Área Pública</h2>
                    <CardButton onClick={() => goToPublicArea()}>Entrar</CardButton>
                </CardPublicArea>
                
                <CardPrivateArea>
                    <h2>Área Privada</h2>
                    <CardButton onClick={() => goToPrivateArea()}>Entrar</CardButton>
                </CardPrivateArea>
            </CardAreas>

            <Footer>
                <h1>Footer</h1>
            </Footer>
            
        </div>
    )
}

export default HomePage;