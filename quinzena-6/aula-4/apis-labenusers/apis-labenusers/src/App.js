import React from 'react';
import PaginaLogin from './Components/PaginaLogin';
import PaginaListaUsers from './Components/PaginaListaUsers';
import styled from 'styled-components';

const DivBotao = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
` 
const BotaoTrocarTela = styled.button`
  background-color: #46036C;
  color: white;
  border: none;
  padding: 7px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
`

class App extends React.Component {
  
  state = {
    paginaAtual : 'login'
  }

  mudarPagina = () => {
    if (this.state.paginaAtual === 'login') {
      this.setState({paginaAtual : 'paginaUsers'})
    }

    else {
      this.setState({paginaAtual : 'login'})
    }
  }

  render() {
    
    return (
      <div>
        {this.state.paginaAtual === 'login' ? <PaginaLogin/> : <PaginaListaUsers/>}
        <DivBotao>
          <BotaoTrocarTela onClick={this.mudarPagina}>Trocar tela</BotaoTrocarTela>
        </DivBotao>
      </div>
    )
  }
}

export default App;
