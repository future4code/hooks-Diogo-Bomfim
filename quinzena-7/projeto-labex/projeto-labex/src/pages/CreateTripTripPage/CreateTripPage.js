import {useNavigate} from "react-router-dom";
import { goBack } from "../../hooks/Coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm"
import {planets, verifyFutureDate} from "../../constants/constants"


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
        return <option key={planet}>{planet}</option>
    }
)

    return (
        <div>
            <h1>CreateTripPage</h1>
            <form onSubmit={postCreateTrip}>
                <input 
                    name="name"
                    placeholder="nome" 
                    value={form.name} 
                    onChange={onChange}
                    pattern={"^.{5,}$"}  
                    title="O nome deve conter no mínimo 5 letras"
                    required
                />
                <select name="planet" placeholder="planeta" value={form.planet} onChange={onChange}>
                    <option>Selecionar Planeta</option>
                    {renderPlanets}
                </select>
                <input 
                    name="date"
                    placeholder="data" 
                    type="date" 
                    value={form.date} 
                    onChange={onChange}
                    min={verifyFutureDate}
                />
                <input
                    name="description" 
                    placeholder="descrição" 
                    value={form.description} 
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                <input 
                    name="durationInDays"
                    type="number" 
                    min={50}
                    title="O tempo de duração mínimo é de 50 dias"
                    required 
                    placeholder="duração da viagem" 
                    value={form.durationInDays} 
                    onChange={onChange}
                />
                <button>Criar</button>
                <button onClick={() => goBack(navigate)}>Voltar</button>
            </form>
        
        </div>
    )
}

export default CreateTripPage;