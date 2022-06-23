import { useNavigate} from "react-router-dom";
import { goBack } from "../../hooks/Coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


const DivCandidates = styled.div`
    display: flex;
`


const TripsDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [tripDetail, setTripDetail] = useState([])
    const [candidates, setCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])

    useEffect(() => {getTripDetail()}, [() => getTripDetail()])
    
    const getTripDetail = () => {
        const headers = {
            headers : {
                auth : localStorage.getItem("token")
            }
        }

        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trip/${localStorage.getItem("tripId")}`, headers)

            .then((response) => {
                setTripDetail(response.data.trip)
                setCandidates(response.data.trip.candidates)
                setApprovedCandidates(response.data.trip.approved)
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }

    const putDecideCandidate = (candidate, approve) => {
        const headers = {
            headers : {
                auth : localStorage.getItem("token")
            }
        }

       const body = {
            approve : approve
       }

        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips/${localStorage.getItem("tripId")}/candidates/${candidate}/decide`, body, headers)

            .then((response) => {
                alert("aprovado")
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }

    const renderCandidates = candidates.map((candidate) => {
        return <DivCandidates key={candidate.id}>
                    <p>{candidate.name}</p>
                    <button onClick={() => putDecideCandidate(candidate.id, true)}>Aprovar</button>
                    <button onClick={() => putDecideCandidate(candidate.id, false)}>Negar</button>
               </DivCandidates>
    }
)

    const renderApprovedCandidates = approvedCandidates.map((candidate) => {
        return <div key={candidate.id}>
                    <p>{candidate.name}</p>
               </div>
    }
)

   const emptyCandidates = (state, render) => {
    if (state.length === 0) {
        return <p>Não temos candidatos :c</p>
    }
    
    else {
        return render
    }
} 

   

    return (
        <div>
            <h1> TripsDetailsPage</h1>
            <div>      
                <p><b>Nome: </b>{tripDetail.name}</p>
                <p><b>Descrição </b>{tripDetail.description}</p>
                <p><b>Planeta: </b>{tripDetail.planet}</p>
                <p><b>Duração: </b>{tripDetail.durationInDays}</p>
                <p><b>Data: </b>{tripDetail.date}</p>
            </div>  
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <div>
                <h2>Candidatos Pendentes</h2>
                {emptyCandidates(candidates, renderCandidates)}
            </div>
            <div>
                <h2>Candidatos Aprovados</h2>
                {emptyCandidates(approvedCandidates, renderApprovedCandidates)}
            </div>
        </div>
    )
}

export default TripsDetailsPage;