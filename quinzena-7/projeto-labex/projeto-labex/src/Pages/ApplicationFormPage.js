import styled from "styled-components";
import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { goBack } from "../hooks/Coordinator.js";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {countries} from "../constants/constants"
import {FooterFixo} from "../constants/constants"

const Form = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow:  rgb(0 0 0 / 20%) 0px 2px 8px 0px;
    border-radius: 15px;
    padding: 40px;
    margin-top: 50px;
` 
const FormInput =  styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid  #1976d2;
`
const FormTextArea = styled.textarea`
    width: 400px;
    height: 80px;
    resize: none;
    border: 1px solid  #1976d2;
`
const FormButtonsDiv = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`
const FormSelect = styled.select`
    width: 410px;
    height: 25px;
    background-color: #1976d2;
    color: white;
    border: none;
`
const FormOption = styled.option`
    background-color: white;
    color: #1976d2;
`
const FormH1Div = styled.div`
    display: flex;
    justify-content: center;
`
const FormH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    background-color: #1976d2; 
    color: white;
    padding: 10px;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    margin-top: 100px;
`
const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const [tripList, setTripList] = useState([])
    const [trip, setTrip] = useState("")
    const [nameApplyed, setNameApplyed] = useState("")
    const [ageApplyed, setAgeApplyed] = useState("")
    const [textApplyed, setTextApplyed] = useState("")
    const [professionApplyed, setProfessionApplyed] = useState("")
    const [countryApplyed, setCountryApplyed] = useState("")
    const [id, setId] = useState("")

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips")
            
            .then((response) => {
                setTripList(response.data.trips)
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }
    
    useEffect(() => {getTrips()}, [])

    const applyToTrip = () => {
        const body = {
            name : nameApplyed,
            age : ageApplyed,
            applicationText : textApplyed,
            profession : professionApplyed,
            country : countryApplyed
         }
        
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips/${id}/apply`, body)
            .then((response) => {
                alert("deu bom")
                setTrip("")
                setNameApplyed("")
                setAgeApplyed("")
                setTextApplyed("")
                setProfessionApplyed("")
                setCountryApplyed("")
            }
        )
            .catch((error) => {
                alert("deu ruim")
                setTrip("")
                setNameApplyed("")
                setAgeApplyed("")
                setTextApplyed("")
                setProfessionApplyed("")
                setCountryApplyed("")
            }
        )
    }       

    const onChangeName = (event) => {
        setNameApplyed(event.target.value)
    }

    const onChangeAge = (event) => {
        setAgeApplyed(event.target.value)
    }

    const onChangeText = (event) => {
        setTextApplyed(event.target.value)
    }

    const onChangeProfession= (event) => {
        setProfessionApplyed(event.target.value)
    }

    const onChangeCountry = (event) => {
        setCountryApplyed(event.target.value)
    }

    const onChangeId = (event) => {
        setId(event.target.value)
        setTrip(event.target.value)
    }	 

    const renderTrips = tripList.map((trip) => {
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
            
            <Form>
                <FormContainer>
                    <FormSelect value={trip} onChange={onChangeId}>
                        <FormOption>Selecionar viagem</FormOption>
                        {renderTrips}
                    </FormSelect>
                    
                    <FormInput placeholder="Nome" value={nameApplyed} onChange={onChangeName}/>
                    <FormInput placeholder="Idade" value={ageApplyed} onChange={onChangeAge}/>
                    <FormInput placeholder="Profissão" value={professionApplyed} onChange={onChangeProfession}/>
                    
                    <FormSelect value={countryApplyed} onChange={onChangeCountry}>
                        <FormOption>Selecionar País</FormOption>
                        {renderCountries}
                    </FormSelect>
                    
                    <FormTextArea placeholder="Texto de candidatura" value={textApplyed} onChange={onChangeText}/>
                    <FormButtonsDiv>
                        <Button variant="outlined" size="medium" disableElevation onClick={() => goBack(navigate)}>Voltar</Button>
                        <Button endIcon={<SendIcon/>}variant="contained" size="medium" disableElevation onClick={() => applyToTrip()}>Enviar</Button>
                    </FormButtonsDiv>
                </FormContainer>
            </Form>
            
            <FooterFixo>
                    <p>© 2022 Todos direitos reservados.</p>
            </FooterFixo>
        </div>
    )
}

export default ApplicationFormPage;