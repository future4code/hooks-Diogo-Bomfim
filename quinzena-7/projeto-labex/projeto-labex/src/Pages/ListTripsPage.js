import styled from "styled-components";
import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { goBack, goToApplicationForm } from "../hooks/Coordinator.js";
import Button from '@mui/material/Button';

const Trips = styled.div`
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px 0px;
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
const TripsB = styled.b`
    color: #1976d2;
    font-family: 'Roboto', sans-serif;
`
const DivButtonTripScreen = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    width: 500px;
    margin-top: 20px;
`
const H1TripScreen = styled.h1`
    font-family: 'Roboto', sans-serif;
    background-color: #1976d2; 
    color: white;
    padding: 10px;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
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