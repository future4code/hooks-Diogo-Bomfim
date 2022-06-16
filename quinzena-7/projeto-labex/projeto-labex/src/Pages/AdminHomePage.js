import {useNavigate} from "react-router-dom";

const AdminHomePage = () => {
    const navigate = useNavigate()
    
    const goToCreateTrip = () => {
        navigate("/admin/trips/create")
    }

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Admin Home</h1>
            <button onClick={() => goToCreateTrip()}>Criar Viagem</button>
            <button onClick={() => goBack()}>Voltar</button>
        </div>
    )
}

export default AdminHomePage;