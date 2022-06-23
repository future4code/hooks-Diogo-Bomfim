import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { goBack } from "../../hooks/Coordinator";
import useForm from "../../hooks/useForm";
import axios from "axios";


const LoginPage = () => {
    const navigate = useNavigate()
    const [ form, onChange, cleanFields] = useForm({ email: "", password:""})

    const postLogin = (event) => {
        event.preventDefault()
        
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/login", form)
                
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
                cleanFields()
            }
        )
            
            .catch((error) => {
                alert("Algo inesperado ocorreu :c")
                cleanFields()
            }
        )
    }
        
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={postLogin}>
                <input 
                    placeholder="Enter your E-mail" 
                    name="email"
                    value={form.email} 
                    onChange={onChange} 
                    type="email" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Deve possuir formato de e-mail"
                    required
                />
                <input 
                    placeholder="Enter your password" 
                    name="password"
                    value={form.password} 
                    onChange={onChange} 
                    type="password" 
                    required
                />
                <button>Entrar</button> 
            </form>
                
                <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default LoginPage;