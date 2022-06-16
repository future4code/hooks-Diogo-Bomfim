import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1)
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <button>Entrar</button>
            <button onClick={() => goBack()}>Voltar</button>
        </div>
    )
}

export default LoginPage;