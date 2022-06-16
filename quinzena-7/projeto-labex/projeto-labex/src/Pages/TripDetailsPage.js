import {useNavigate} from "react-router-dom";

const TripsDetailsPage = () => {
    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1)
    }
    
    return (
        <div>
            <h1> TripsDetailsPage</h1>
            <button onClick={() => goBack()}>Voltar</button>
        </div>
    )
}

export default TripsDetailsPage;