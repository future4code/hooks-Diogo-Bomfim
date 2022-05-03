import React from "react";
import styled from "styled-components";

// ESTILIZAÇÃO
const H2Estilizacao = styled.h2`
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    color: #050B3D;
`
const TelaAgradecimento = styled.div`
    width: 70%;
`
class FimFormulario extends React.Component {
    render() {
        return (
            <TelaAgradecimento>
                <H2Estilizacao>Parabéns, você chegou ao fim do formulário c: </H2Estilizacao>
                <p><b>Obrigado pela colaboração 🙏🏻</b></p>
            </TelaAgradecimento>
        )
    }
}

export default FimFormulario