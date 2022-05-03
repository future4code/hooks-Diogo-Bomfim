import React from "react";
import styled from "styled-components";
import DadosGerais from "../DadosGerais/DadosGerais";

const InputsDadosEducacionais = styled.input`
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
    border: 1px solid #050B3D;
`

// ESTILIZAÇÃO
const H2Estilizacao = styled.h2`
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    color: #050B3D;
`
const PEstilizacao = styled.p`
    background-color: #050B3D;
    padding: 2px;
    color: white;
    border-radius: 10px;
`
const ButtonDadosEducacionais = styled.button`
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #050B3D;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`
class DadosEducacionais extends React.Component {
    render() {
        return (
            <div>
                <H2Estilizacao>ETAPA 2 - ENSINO SUPERIOR</H2Estilizacao>
                
                <PEstilizacao>5. Qual curso?</PEstilizacao>
                <InputsDadosEducacionais placeholder="Digite seu curso" size={30}/>
                
                <PEstilizacao>6. Qual a unidade de ensino</PEstilizacao>
                <InputsDadosEducacionais placeholder="Digite a unidade" size={30}/>

                <ButtonDadosEducacionais onClick={this.props.passarEtapa}>Próxima Etapa</ButtonDadosEducacionais>
            </div>
        )
    }
}

export default DadosEducacionais