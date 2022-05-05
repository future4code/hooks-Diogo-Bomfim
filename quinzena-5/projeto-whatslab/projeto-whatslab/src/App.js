import React from "react";
import styled from "styled-components";
import MensagemTela from "./components/MensagemTela/MensagemTela";

const ContainerPrincipal = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
flex-direction: column;
width: 350px;
height: 656px;
padding: 10px;
padding-bottom: 1px;
`
const CampoMensagens = styled.div`
display: flex;
flex-direction: column-reverse;
align-items: center;
width: 100%;
height: 90%;
border-radius: 7px;
background-image: url("https://i.pinimg.com/736x/85/04/30/850430a750fb80c1ebaa5e740fc7cbd6.jpg");
`
const CampoInputs = styled.div`
display: flex;
width: 100%;
`
const ContainerInputs = styled.div`
display: flex;
gap: 10px;
justify-content: space-around;
margin-top: 5px;
margin-bottom: 10px;
width: 100%;
background-image: url("https://i.pinimg.com/originals/b0/e0/00/b0e000506fae6320af46056c41ffa6ae.jpg");
border-radius: 10px;
border: 1px solid black;
padding: 8px;
`
const InputUsuario = styled.input`
border-radius: 10px;
padding: 3px;
text-align: center;
border: 2px solid white;
background-color: black;
color: whitesmoke;
`
const InputMensagem = styled.input`
border-radius: 10px;
padding: 3px;
text-align: center;
border: 2px solid white;
background-color: black;
color: whitesmoke;
`
const Botao = styled.button`
border-radius: 10px;
padding: 5px;
border: none;
background-color: black;
font-weight: bold;
color: whitesmoke;
border: 2px solid white;

&:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
    cursor: pointer;
    transition: 0.5s;
}
`
class App extends React.Component {
    state = {
        mensagensEnviar : [],
        campoUsuario : '',
        campoMensagem : ''
    }
    
    onChangeUsuario = (event) => {
        this.setState({campoUsuario : event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({campoMensagem : event.target.value})
    }

    onClickEnviar = () => {
        if (this.state.usuario !== '' && this.state.mensagem !== '') {
            const NovaMensagemEnviar = {
                usuario: this.state.campoUsuario,
                mensagem: this.state.campoMensagem
            }

            this.setState({mensagensEnviar : [NovaMensagemEnviar, ...this.state.mensagensEnviar], campoMensagem : ''})
        }
    }

    renderizandoMensagem = () => {
        return this.state.mensagensEnviar.map((dado, i) => {
            return (
                <MensagemTela 
                key={i}
                propUsuario = {dado.usuario}
                propMensagem = {dado.mensagem}
                />)
        })
    }

    render() {
        
        return (
            <ContainerPrincipal>
                <CampoMensagens>
                    {this.renderizandoMensagem()}
                </CampoMensagens>
                
                <CampoInputs>
                    <ContainerInputs>
                        <InputUsuario placeholder="Seu nome" value={this.state.campoUsuario} onChange={this.onChangeUsuario} maxLength={15} size={8}/>
                        <InputMensagem placeholder="Sua mensagem" value={this.state.campoMensagem} onChange={this.onChangeMensagem} maxLength={500} size={18}/>
                        <Botao className="botao-hover" onClick={this.onClickEnviar}>Enviar</Botao>
                    </ContainerInputs>
                </CampoInputs>
            </ContainerPrincipal>
        )
    }
}

export default App