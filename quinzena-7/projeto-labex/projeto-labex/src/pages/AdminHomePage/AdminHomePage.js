import {useNavigate} from "react-router-dom";
import { goToCreateTrip, goToPrivateArea, goToSeeTripDetail } from "../../hooks/Coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios"
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";
import { FooterFixo } from "../../constants/constants";
import { CardTripDiv, DivTrips, DivInitialInfos, H2InitialInfos, DivButtons }  from "../AdminHomePage/styles"
import { Button } from "@mui/material";

const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [tripList] = useRequestData(`${BASE_URL}trips`)
   
    const deleteTrip = (idTrip) => {
        const headers = {
            headers : {
                auth : localStorage.getItem("token") 
            }
        }
        
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips/${idTrip}`, headers)

            .then((response) => {
                if (window.confirm("Deseja mesmo apagar a viagem?")) {
                    alert("Viagem apagada com sucesso!!!")
                }
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }

    const onClickSetTripId = (trip) => {
        localStorage.setItem('tripId', trip)

        if (localStorage.getItem('tripId').length > 0) {
            goToSeeTripDetail(navigate)
        }
    }

    const onClickLogOff = () => {
        localStorage.removeItem("token")
        goToPrivateArea(navigate)
    }

    const renderTrips = tripList && tripList.trips.map((trip) => {
        return <CardTripDiv key={trip.id}>
                    <p><b>{trip.name}</b></p>
                    <DivButtons>
                        <Button variant="contained" onClick={() => onClickSetTripId(trip.id)}>VER DETALHES</Button>
                        <Button color="error" variant="outlined" onClick={() => deleteTrip(trip.id)}>APAGAR</Button>
                    </DivButtons>
               </CardTripDiv>
                   
        }
    )           

    return (
        <div>
            <DivTrips>
                <DivInitialInfos>
                    <Button variant="outlined" disableElevation onClick={() => onClickLogOff()} >Logout</Button>
                    <Button variant="contained" disableElevation onClick={() => goToCreateTrip(navigate)}>CRIAR VIAGEM</Button>
                </DivInitialInfos>
                <H2InitialInfos>Viagens</H2InitialInfos>
                {renderTrips}
            </DivTrips>
            <FooterFixo>
                <p>© 2022 Todos direitos reservados.</p>
            </FooterFixo>
        </div>  
    )
}

export default AdminHomePage;