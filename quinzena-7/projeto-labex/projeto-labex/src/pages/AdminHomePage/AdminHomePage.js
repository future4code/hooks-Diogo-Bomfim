import {useNavigate} from "react-router-dom";
import { goToCreateTrip, goToSeeTripDetail } from "../../hooks/Coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios"
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";

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
                alert("Viagem deletada")
            
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
    
    const renderTrips = tripList && tripList.trips.map((trip) => {
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