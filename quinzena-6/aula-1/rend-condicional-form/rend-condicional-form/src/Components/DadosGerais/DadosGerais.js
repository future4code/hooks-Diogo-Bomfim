import React from "react";
import styled from "styled-components";

const SelectDadosGerais = styled.select`
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
`
const InputDadosGerais = styled.input`
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
const BotaoEstilizacao = styled.button`
    background-color: #050B3D;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`
class DadosGerais extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <H2Estilizacao>ETAPA 1 - DADOS GERAIS</H2Estilizacao>

                <PEstilizacao>1. Qual seu nome</PEstilizacao>
                <InputDadosGerais placeholder="Digite seu nome" size={30}/>
                
                <PEstilizacao>2. Qual sua idade</PEstilizacao>
                <InputDadosGerais placeholder="Digite sua idade" size={30}/>
                
                <PEstilizacao>3. Qual seu e-mail</PEstilizacao>
                
                <InputDadosGerais placeholder="Digite seu e-mail" size={30}/>
                
                <PEstilizacao>4. Qual sua escolaridade</PEstilizacao>
                <SelectDadosGerais>
                    <option value='Ensino médio incompleto'> Ensino médio incompleto </option>
                    <option value='Ensino médio completo'> Ensino médio completo </option>
                    <option value='Ensino superior incompleto'> Ensino superior incompleto </option>
                    <option value='Ensino superior completo'> Ensino superior completo </option>
                </SelectDadosGerais>
                    <BotaoEstilizacao onClick={this.props.passarEtapa}>Próxima etapa</BotaoEstilizacao>
            </div>
        )
    }
}

export default DadosGerais