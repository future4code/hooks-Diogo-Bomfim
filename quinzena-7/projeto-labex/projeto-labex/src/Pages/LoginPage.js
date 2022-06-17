import {useNavigate} from "react-router-dom";
import { goBack } from "../hooks/Coordinator";

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Login Page</h1>
            <button>Entrar</button>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default LoginPage;