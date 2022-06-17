import {useNavigate} from "react-router-dom";
import { goBack, goToCreateTrip } from "../hooks/Coordinator";

const AdminHomePage = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <h1>Admin Home</h1>
            <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default AdminHomePage;