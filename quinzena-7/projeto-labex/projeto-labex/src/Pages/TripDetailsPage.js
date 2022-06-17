import {useNavigate} from "react-router-dom";
import { goBack } from "../hooks/Coordinator";

const TripsDetailsPage = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <h1> TripsDetailsPage</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default TripsDetailsPage;