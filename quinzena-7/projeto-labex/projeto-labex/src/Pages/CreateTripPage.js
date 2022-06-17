import {useNavigate} from "react-router-dom";
import { goBack } from "../hooks/Coordinator";

const CreateTripPage = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <h1>CreateTripPage</h1>
            <button>Criar</button>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default CreateTripPage;