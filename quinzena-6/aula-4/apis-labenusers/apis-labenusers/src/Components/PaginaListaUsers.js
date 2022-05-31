import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerUsers = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    gap: 5px;
    margin-top: 150px;
    text-align: center;
    background: url("https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-cartoon-hand-drawn-city-silhouette-background-design-silhouettecitybuildingskycloudadvertising-backgroundbackground-materialpsd-image_66489.jpg") ;
    border-radius: 15px;
    padding: 50px 50px 150px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.4);
`

const UserList = styled.div`
    width: 100%; 
`

const UlUsers = styled.ul`
    display: flex;
    justify-content: space-between;
    text-align: start;
    color: white;
    background-color: #46036C;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    width: 45%;
    margin: 0 auto;
    margin-top: 10px;
`

const BotaoDeletar = styled.button`
    font-weight: bold;
    color: red;
`

const apiUserLink = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
    headers : {
        Authorization : "diogo-bomfim-hooks"
    }
}

class PaginaListaUsers extends React.Component {
    
    state = {
        listaUsers : []
    }

    componentDidMount() {
        this.allUsers()
    }

    allUsers = () => {
        axios
            .get(apiUserLink, headers)
            .then((response) => {
                this.setState({listaUsers : response.data})
                console.log(this.state.listaUsers)
        }
    )
            .catch((error) => {
                alert("Algo deu errado :(")
            }
        )
    }

    delUser = (userId) => {
        if (window.confirm("Deseja mesmo apagar o usuário?")) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, headers)
                .then((response) => {
                    alert("Usuário apagado!")
                    this.allUsers()
                }
            )
            .catch((error) => {
                alert("Algo aconteceu, o usuário não foi apagado!")
                console.log(error)
            }
        )
    }      
}
    
    render () {
        
        const usersExistentes = this.state.listaUsers.map((user) => {
            return <div key={user.id}>
                        <UlUsers>{user.name}
                        <BotaoDeletar onClick={() => this.delUser(user.id)}>APAGAR</BotaoDeletar>
                        </UlUsers> 
                   </div>

        })

        return (
            <ContainerUsers>
                <UserList >
                    {usersExistentes}
                </UserList>
            </ContainerUsers>
        )
    }
}

export default PaginaListaUsers; 