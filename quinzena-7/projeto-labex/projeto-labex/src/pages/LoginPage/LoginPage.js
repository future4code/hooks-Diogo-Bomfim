import {useNavigate} from "react-router-dom";
import { goBack } from "../../hooks/Coordinator";
import useForm from "../../hooks/useForm";
import axios from "axios";
import {LoginForm, DivButtons, InputForm, H1Form, ButtonSend, Container} from "../LoginPage/styles"
import {FooterFixo} from "../../constants/constants"
import { Button } from "@mui/material";

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
            <Container>
                <LoginForm onSubmit={postLogin}>
                    <H1Form>Formulário de login</H1Form>
                    <InputForm 
                        placeholder="Digite seu E-mail" 
                        name="email"
                        value={form.email} 
                        onChange={onChange} 
                        type="email" 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Deve possuir formato de e-mail"
                        required
                    />
                    <InputForm 
                        placeholder="Digite sua senha" 
                        name="password"
                        value={form.password} 
                        onChange={onChange} 
                        type="password" 
                        required
                    />
                    <DivButtons>
                        <Button variant="outlined"  size="medium" disableElevation onClick={() => goBack(navigate)}>Voltar</Button>
                        <ButtonSend>ENTRAR</ButtonSend>
                    </DivButtons> 
                </LoginForm>
            </Container>
            <FooterFixo>
                <p>© 2022 Todos direitos reservados.</p>
            </FooterFixo>
        </div>
    )
}

export default LoginPage;