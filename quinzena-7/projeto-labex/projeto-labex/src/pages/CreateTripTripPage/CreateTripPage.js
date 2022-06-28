import {useNavigate} from "react-router-dom";
import { goBack } from "../../hooks/Coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm"
import {planets, verifyFutureDate} from "../../constants/constants"
import { H1Form, FormSelect, FormTrip, ContainerForm, FormButtonsDiv, ButtonSend, FormInput, FormOption } from "../CreateTripTripPage/styles"
import { Button } from "@mui/material";
import { FooterFixo } from "../../constants/constants";

const CreateTripPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [form, onChange, cleanFields] = useForm({name : "", planet : "", date : "", description : "", durationInDays : ""})
    
    const postCreateTrip = (event) => {
        event.preventDefault()
        const headers = {
            headers : {
                auth : localStorage.getItem('token')
            }
        }

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips", form, headers)

            .then((response) => {
                alert("Sua viagem foi criada")
                cleanFields()
            }   
        )
            .catch((error) => {
                alert("Algo inesperado ocorreu :c")
                cleanFields()
            }
        )
    }

    const renderPlanets = planets.map((planet) => {
        return <FormOption key={planet}>{planet}</FormOption>
    }
)

    return (
        <div>
            <ContainerForm>
                <H1Form>Crie sua viagem</H1Form>
                <FormTrip onSubmit={postCreateTrip}>
                    <FormSelect name="planet" placeholder="planeta" value={form.planet} onChange={onChange}>
                        <FormOption>Selecionar Planeta</FormOption>
                        {renderPlanets}
                    </FormSelect>
                    <FormInput
                        name="name"
                        placeholder="nome" 
                        value={form.name} 
                        onChange={onChange}
                        pattern={"^.{5,}$"}  
                        title="O nome deve conter no mínimo 5 letras"
                        required
                    />
                    <FormInput
                        name="date"
                        placeholder="data" 
                        type="date" 
                        value={form.date} 
                        onChange={onChange}
                        min={verifyFutureDate}
                    />
                    <FormInput
                        name="description" 
                        placeholder="descrição" 
                        value={form.description} 
                        onChange={onChange}
                        required
                        pattern={"^.{30,}$"}
                        title={"O texto deve ter no mínimo 30 caracteres"}
                    />
                    <FormInput 
                        name="durationInDays"
                        type="number" 
                        min={50}
                        title="O tempo de duração mínimo é de 50 dias"
                        required 
                        placeholder="duração da viagem" 
                        value={form.durationInDays} 
                        onChange={onChange}
                    />
                    <FormButtonsDiv>
                        <ButtonSend>CRIAR</ButtonSend>
                        <Button variant="outlined" onClick={() => goBack(navigate)}>Voltar</Button>
                    </FormButtonsDiv>
                </FormTrip>
            </ContainerForm>
            <FooterFixo>
                <p>© 2022 Todos direitos reservados.</p>
            </FooterFixo>
        </div>
    )
}

export default CreateTripPage;