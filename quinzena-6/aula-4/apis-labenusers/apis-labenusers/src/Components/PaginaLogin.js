import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivLogin = styled.div`
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
const LoginH1 = styled.h1`
    color: white;
    background-color: #46036C;
    padding: 2px;
    border-radius: 15px;
    margin: 0 auto;
    width: 50%;
`
const CampoInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 5px;
`

const Inputs = styled.input`
    border-radius: 5px;
    border: 1px solid #820ad1;
`

const BotaoCriarUser = styled.button`
    border-radius: 5px;
    border: 1px solid #820ad1;
    background-color: white;
    cursor: pointer;
`

const apiUserLink = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
    headers : {
        Authorization : "diogo-bomfim-hooks"
    }
}

class PaginaLogin extends React.Component {
    
    state = {
        inputNome : '',
        inputEmail : ''
    }

    createUser = () => {
        const body = {
            name : this.state.inputNome,
            email : this.state.inputEmail
        }

        axios
            .post(apiUserLink, body, headers)
            .then((response) => {
                alert("O usuário foi criado com sucesso!")
                this.setState({ inputNome : ""})
                this.setState({inputEmail : ""})
            }
        )
            .catch((error) => {
                alert("Algo deu erro")
                this.setState({ inputNome : ""})
                this.setState({inputEmail : ""})
            })
    }

    onchangeInputNome = (event) => {
        this.setState({inputNome : event.target.value})
    }

    onchangeInputEmail = (event) => {
        this.setState({inputEmail : event.target.value})
    }
    
    render () {
        return (
            <DivLogin>
                <LoginH1>Login</LoginH1>
                <CampoInputs>
                    <Inputs placeholder='Nome' type="name" value={this.state.inputNome} onChange={this.onchangeInputNome}/>
                    <Inputs placeholder='E-mail' type="email" value={this.state.inputEmail} onChange={this.onchangeInputEmail}/>
                </CampoInputs>
                <BotaoCriarUser onClick={this.createUser}>Criar Usuário</BotaoCriarUser>
            </DivLogin>
        )
    }
}

export default PaginaLogin;