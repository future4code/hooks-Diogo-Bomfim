import React from "react";
import styled from "styled-components";

const ContainerMensagens = styled.div`
background-color: whitesmoke; 
border-radius: 10px;
padding: 10px;
width: 88%;
margin-bottom: 10px;
`
const CampoUser = styled.span`
font-weight: bold;
`
const CampoText = styled.span`
`

class MensagemTela extends React.Component {
    render () {
        
        return (
            <ContainerMensagens>
                <CampoUser>{this.props.propUsuario}: </CampoUser>
                <CampoText>{this.props.propMensagem}</CampoText>
            </ContainerMensagens>
        )
    }
}

export default MensagemTela