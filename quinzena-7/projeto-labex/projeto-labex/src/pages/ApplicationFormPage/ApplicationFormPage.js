import {FormDiv, FormContainer, FormDef, FormInput, FormTextArea, FormButtonsDiv, FormSelect, FormOption, FormH1Div, FormH1, ButtonSend} from "../ApplicationFormPage/styles"
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { goBack } from "../../hooks/Coordinator.js";
import Button from '@mui/material/Button';
import {BASE_URL, countries} from "../../constants/constants"
import {FooterFixo} from "../../constants/constants"
import useForm from "../../hooks/useForm.js";
import useRequestData from "../../hooks/useRequestData.js";

const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const [form, onChange,  cleanFields] = useForm({name : "", age : "", applicationText : "", profession : "", country : ""})
    const [tripList] = useRequestData(`${BASE_URL}trips`)
    const [id, setId] = useState("")
    
    const applyToTrip = (event) => {
        event.preventDefault()
        
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips/${id}/apply`, form)
            .then((response) => {
                alert("Inscrito com sucesso!")
                cleanFields()
                
            }
        )
            .catch((error) => {
                alert("Problema inesperado na inscrição :c")
                cleanFields()
                
            }
        )
    }       

    const onChangeId = (event) => {
        setId(event.target.value)
    }
   
    const renderTrips = tripList && tripList.trips.map((trip) => {
        return <FormOption key={trip.id} value={trip.id}> {trip.name} </FormOption>         
    }
)

    const renderCountries = countries.map((country, i) => {
        return <FormOption key={i}> {country} </FormOption>
    }
)
    
    return (
        <div>
            <FormH1Div>
                <FormH1>Inscreva-se para uma viagem</FormH1>
            </FormH1Div>
                <FormDiv>
                    <FormContainer>
                        <FormDef onSubmit={applyToTrip}>
                            <FormSelect value={id} onChange={onChangeId}>
                                <FormOption>Selecionar viagem</FormOption>
                                {renderTrips}
                            </FormSelect>
                            <FormInput 
                                placeholder="Nome" 
                                name="name"
                                value={form.name} 
                                onChange={onChange}  
                                pattern={"^.{3,}$"}  
                                title="O nome deve conter no mínimo 3 letras"
                                required
                            />
                            <FormInput 
                                placeholder="Idade" 
                                name="age"
                                value={form.age} 
                                onChange={onChange}
                                type={"number"}
                                min={18}
                                required
                            />
                            <FormInput 
                                placeholder="Profissão" 
                                name="profession"
                                value={form.profession} 
                                onChange={onChange}
                                pattern={"^.{10,}$"}
                                title={"A profissão deve ter no mínimo 10 caracteres"}
                                required
                            />
                            <FormSelect name="country" value={form.country} onChange={onChange}>
                                <FormOption>Selecionar País</FormOption>
                                {renderCountries}
                            </FormSelect>
                            <FormTextArea 
                                placeholder="Texto de candidatura" 
                                name="applicationText" 
                                value={form.applicationText} 
                                onChange={onChange}
                                required
                                pattern={"^.{30,}$"}
                                title={"O texto deve ter no mínimo 30 caracteres"}
                            />
                            <FormButtonsDiv>
                                <Button variant="outlined" size="medium" disableElevation onClick={() => goBack(navigate)}>Voltar</Button>
                                <ButtonSend>ENVIAR</ButtonSend>
                            </FormButtonsDiv>
                        </FormDef>
                    </FormContainer>
                </FormDiv>    
            <FooterFixo>
                    <p>© 2022 Todos direitos reservados.</p>
            </FooterFixo>
        </div>
    )
}

export default ApplicationFormPage;