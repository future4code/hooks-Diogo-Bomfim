import styled from "styled-components";
import {Header, Footer} from "../Constants/ConstantStyles.js"
import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { goBack } from "../hooks/Coordinator.js";

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
                setNameApplyed("")
                setAgeApplyed("")
                setTextApplyed("")
                setProfessionApplyed("")
                setCountryApplyed("")
            }
        )
            .catch((error) => {
                alert("deu ruim")
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
        return <option key={trip.id} value={trip.id}> {trip.name} </option>         
    }
)
    
    return (
        <div>
            <Header>
                <h1>HEADER</h1>
            </Header>
            
            <h1>Inscreva-se para uma viagem</h1>
            <div>
                <select value={trip} onChange={onChangeId}>
                    <option>Selecionar viagem</option>
                    {renderTrips}
                </select>
                <input placeholder="Nome" value={nameApplyed} onChange={onChangeName}/>
                <input placeholder="Idade" value={ageApplyed} onChange={onChangeAge}/>
                <input placeholder="Texto" value={textApplyed} onChange={onChangeText}/>
                <input placeholder="Profissão" value={professionApplyed} onChange={onChangeProfession}/>
                <input placeholder="País" value={countryApplyed} onChange={onChangeCountry}/>
                <button onClick={() => applyToTrip()}>Enviar</button>
                <button onClick={() => goBack(navigate)}>Voltar</button>
            </div>
        </div>
    )
}

export default ApplicationFormPage;