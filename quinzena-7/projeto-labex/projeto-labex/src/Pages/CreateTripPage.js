import {useNavigate} from "react-router-dom";

const CreateTripPage = () => {
    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1)
    }
    
    return (
        <div>
            <h1>CreateTripPage</h1>
            <button>Criar</button>
            <button onClick={() => goBack()}>Voltar</button>
        </div>
    )
}

export default CreateTripPage;