import {useNavigate} from "react-router-dom";
import { goBack } from "../hooks/Coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { useState } from "react";

const CreateTripPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")

    const postCreateTrip = () => {
        const headers = {
            headers : {
                auth : localStorage.getItem('token')
            }
        }

        const body = {
            name : name,
            planet : planet,
            date : date,
            description : description,
            durationInDays : duration,
        }

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips", body, headers)

            .then((response) => {
                alert("Sua viagem foi criada")
                setName("")
                setPlanet("")
                setDate("")
                setDescription("")
                setDuration("")
            }   
        )
            .catch((error) => {
                console.log(error)
                setName("")
                setPlanet("")
                setDate("")
                setDescription("")
                setDuration("")
            }
        )
    }


    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangePlanet = (event) => {
        setPlanet(event.target.value)
    }

    const onChangeDate = (event) => {
        setDate(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const onChangeDuration = (event) => {
        setDuration(event.target.value)
    }

    return (
        <div>
            <h1>CreateTripPage</h1>
            <input placeholder="nome" value={name} onChange={onChangeName}/>
            <input placeholder="planeta" value={planet} onChange={onChangePlanet}/>
            <input placeholder="data" type="date" value={date} onChange={onChangeDate}/>
            <input placeholder="descrição" value={description} onChange={onChangeDescription}/>
            <input placeholder="duração" value={duration} onChange={onChangeDuration}/>
            <button onClick={() => postCreateTrip()}>Criar</button>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default CreateTripPage;