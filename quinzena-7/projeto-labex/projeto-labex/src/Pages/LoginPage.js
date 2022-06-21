import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { goBack } from "../hooks/Coordinator";
import axios from "axios";


const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const postLogin = () => {
        const body = {
            email : email,
            password : password
        }
        
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/login", body)
                
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            }
        )
            
            .catch((error) => {
                alert("deu ruim")
            }
        )
    }
        
   

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div>
            <h1>Login Page</h1>
            
            <input placeholder="Enter your E-mail" value={email} onChange={onChangeEmail} type="email"/>
            <input placeholder="Enter your password" value={password} onChange={onChangePassword} type="password"/>

            <button onClick={() => postLogin()}>Entrar</button>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default LoginPage;