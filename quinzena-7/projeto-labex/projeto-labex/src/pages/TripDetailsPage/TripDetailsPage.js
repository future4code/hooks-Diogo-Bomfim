import { useNavigate} from "react-router-dom";
import { goBack } from "../../hooks/Coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { DivCandidates, DivTripDetails, DivDetails, H1Detail, BTripDetails, DivAllCandidates, ContainerCandidates, DivButtons } from "../TripDetailsPage/styles"
import { Button } from "@mui/material";
import {FooterFixo} from "../../constants/constants"

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
                if (approve === true) {
                    alert("Candidato aprovado!")
                }

                else {
                    alert("Candidato reprovado!")
                }
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }

    const renderCandidates = candidates.map((candidate) => {
        return <DivCandidates key={candidate.id}>
                    <p><b>{candidate.name}</b></p>
                    <DivButtons>
                        <Button color="success" variant="outlined" onClick={() => putDecideCandidate(candidate.id, true)}>Aprovar</Button>
                        <Button color="error" variant="outlined" onClick={() => putDecideCandidate(candidate.id, false)}>Negar</Button>
                    </DivButtons>
               </DivCandidates>
    }
)

    const renderApprovedCandidates = approvedCandidates.map((candidate) => {
        return <div key={candidate.id}>
                    <p><b>{candidate.name}</b></p>
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

    const BackAndDeleteTripId = () => {
        localStorage.removeItem("tripId")
        goBack(navigate)
    }
   
    return (
        <div>
            <DivTripDetails>
                <H1Detail>Detalhes da viagem</H1Detail>
                <DivDetails>      
                    <p><BTripDetails>Nome: </BTripDetails>{tripDetail.name}</p>
                    <p><BTripDetails>Descrição: </BTripDetails>{tripDetail.description}</p>
                    <p><BTripDetails>Planeta: </BTripDetails>{tripDetail.planet}</p>
                    <p><BTripDetails>Duração: </BTripDetails>{tripDetail.durationInDays}</p>
                    <p><BTripDetails>Data: </BTripDetails>{tripDetail.date}</p>
                    <Button variant="outlined" onClick={() => BackAndDeleteTripId()}>Voltar</Button>
                </DivDetails>
            </DivTripDetails>  
            
            <DivAllCandidates>
                <ContainerCandidates>
                    <div>
                        <H1Detail>Candidatos Pendentes</H1Detail>
                        {emptyCandidates(candidates, renderCandidates)}
                    </div>
                    <div>
                        <H1Detail>Candidatos Aprovados</H1Detail>
                        {emptyCandidates(approvedCandidates, renderApprovedCandidates)}
                    </div>
                </ContainerCandidates>
            </DivAllCandidates>
            <FooterFixo>
                <p>© 2022 Todos direitos reservados.</p>
            </FooterFixo>
        </div>
    )
}

export default TripsDetailsPage;