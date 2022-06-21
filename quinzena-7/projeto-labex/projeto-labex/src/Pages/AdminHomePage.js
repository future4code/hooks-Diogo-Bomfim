import {useNavigate} from "react-router-dom";
import { goToCreateTrip, goToSeeTripDetail } from "../hooks/Coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useState, useEffect } from "react";
import axios from "axios"

const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [tripList, setTripList] = useState([])
    const [tripId, setTripId] = useState("")

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
    
    const deleteTrip = (idTrip) => {
        const headers = {
            headers : {
                auth : localStorage.getItem("token") 
            }
        }
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips/${idTrip}`, headers)

            .then((response) => {
                alert("Viagem deletada")
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }

    const onClickSetTripId = (trip) => {
        setTripId(trip)
        localStorage.setItem('tripId', trip)

        if (localStorage.getItem('tripId').length > 0) {
            goToSeeTripDetail(navigate)
        }
    }
    useEffect(() => {getTrips()}, [() => getTrips()])

    
    const renderTrips = tripList.map((trip) => {
        return <div key={trip.id}>
                <p onClick={() => onClickSetTripId(trip.id)}>{trip.name}</p>
                <button onClick={() => deleteTrip(trip.id)}>Delete</button>
               </div>
        
            
    }
)

    return (
        <div>
            <h1>Admin Home</h1>
            <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
            
            
            {renderTrips}
            
                
            
        </div>
    )
}

export default AdminHomePage;