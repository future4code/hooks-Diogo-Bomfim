import styled from "styled-components";
import {Header, Footer} from "../Constants/ConstantStyles.js"
import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { goBack, goToApplicationForm } from "../hooks/Coordinator.js";

const Trips = styled.div`
    background-color: pink;
    width: 500px;
    padding: 10px;
`
const TripScreen = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

const ListTripsPage = () => {
    const navigate = useNavigate()
    const [tripList, setTripList] = useState([])

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips")
            
            .then((response) => {
                setTripList(response.data.trips)
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }
    
    useEffect(() => {getTrips()}, [])

    const renderTrips = tripList.map((trip) => {
        return <Trips key={trip.id}>
                    <p><b>Nome:</b> {trip.name}</p>
                    <p><b>Descrição:</b> {trip.description}</p>
                    <p><b>Planeta:</b> {trip.planet}</p>
                    <p><b>Duração:</b> {trip.durationInDays}</p>
                    <p><b>Data:</b> {trip.date}</p>
                </Trips>
    }
)
    
    return (
        <div>
            <Header>
                <h1>HEADER</h1>
            </Header>
            
            <TripScreen>
                <h1>Lista de viagens</h1>
                <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se em uma viagem</button>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                {renderTrips}
                
            </TripScreen>
            
        </div>
    )
}

export default ListTripsPage;