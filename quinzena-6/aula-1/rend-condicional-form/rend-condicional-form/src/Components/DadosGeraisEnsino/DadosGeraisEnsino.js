import React from "react";
import styled from "styled-components";

const InputDadosGeraisEnsino = styled.input`
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
    border: 1px solid #050B3D;
`
const ButtonDadosGeraisEnsino = styled.button`
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #050B3D;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`
const SelectDadosGeraisEnsino = styled.select`
    text-align: center;
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

class DadosGeraisEnsino extends React.Component {
    render() {
        return (
            <div>
                <H2Estilizacao>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</H2Estilizacao>
                
                <PEstilizacao>7. Por que você não terminou um curso de graduação?</PEstilizacao>
                <InputDadosGeraisEnsino placeholder="Digite o motivo"/>
                
                <PEstilizacao>8. Você fez algum curso complementar?</PEstilizacao>
                <SelectDadosGeraisEnsino>
                    <option value="Nenhum"> Nenhum </option>
                    <option value="Curso técnico"> Curso técnico </option>
                    <option value="Curso de inglês"> Curso de inglês </option>
                </SelectDadosGeraisEnsino>
                <ButtonDadosGeraisEnsino onClick={this.props.passarEtapa}>Próxima Etapa</ButtonDadosGeraisEnsino>
            </div>
        )
    }
}

export default DadosGeraisEnsino

