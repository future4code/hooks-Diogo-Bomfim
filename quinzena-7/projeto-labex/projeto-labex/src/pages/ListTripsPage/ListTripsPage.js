import {Trips, TripsB, TripScreen, H1TripScreen, DivButtonTripScreen} from "../ListTripsPage/styles"
import {useNavigate} from "react-router-dom";
import { goBack, goToApplicationForm } from "../../hooks/Coordinator.js";
import Button from '@mui/material/Button';
import useRequestData from "../../hooks/useRequestData.js";
import {BASE_URL} from "../../constants/constants"

const ListTripsPage = () => {
    const navigate = useNavigate()
    const [tripList] = useRequestData(`${BASE_URL}trips`)

    const renderTrips = tripList && tripList.trips.map((trip) => {
        return <Trips key={trip.id}>
                    <p><TripsB>Nome:</TripsB> {trip.name}</p>
                    <p><TripsB>Descrição:</TripsB> {trip.description}</p>
                    <p><TripsB>Planeta:</TripsB> {trip.planet}</p>
                    <p><TripsB>Duração:</TripsB> {trip.durationInDays}</p>
                    <p><TripsB>Data:</TripsB> {trip.date}</p>
                </Trips>
        }
    )
    
    return (
        <div>
            <TripScreen>
                <H1TripScreen>Lista de viagens</H1TripScreen>
                <DivButtonTripScreen>
                    <Button variant="outlined"  size="medium" disableElevation onClick={() => goBack(navigate)}>Voltar</Button>
                    <Button variant="contained" size="medium" disableElevation onClick={() => goToApplicationForm(navigate)}>Inscrever-se</Button>
                </DivButtonTripScreen>
                {renderTrips} 
            </TripScreen>
        </div>
    )
}

export default ListTripsPage;