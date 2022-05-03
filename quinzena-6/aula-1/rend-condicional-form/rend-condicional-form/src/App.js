import React from 'react';
import styled from 'styled-components';
import DadosGerais from './Components/DadosGerais/DadosGerais';
import DadosEducacionais from './Components/DadosEducacionais/DadosEducacionais';
import DadosGeraisEnsino from './Components/DadosGeraisEnsino/DadosGeraisEnsino';
import FimFormulario from './Components/FimFormulario/FimFormulario';


const AppTela = styled.div`
  background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-cartoon-hand-drawn-city-silhouette-background-design-silhouettecitybuildingskycloudadvertising-backgroundbackground-materialpsd-image_66489.jpg");
  width: 50%;
  margin: 0 auto;
  margin-top: 100px; 
  padding: 10px;
  border-radius: 10px;
`
const TelaDadosGerais = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`
class App extends React.Component{

  state = {
    EtapaConcluida : 0
  }
  
  passarEtapa = () => {
    const EtapasConcluidas = this.state.EtapaConcluida
    this.setState({EtapaConcluida : EtapasConcluidas + 1})
  }

  renderizarPagina = () => {
    if (this.state.EtapaConcluida === 1) {
      return <DadosEducacionais passarEtapa={this.passarEtapa}/> 
    }

    else if (this.state.EtapaConcluida === 2) {
      return <DadosGeraisEnsino  passarEtapa={this.passarEtapa}/>
    }

    else if  (this.state.EtapaConcluida === 3) {
      return <FimFormulario/>
    }

    else {
      return <DadosGerais passarEtapa={this.passarEtapa}/>  
    }
  }

  render () {
    console.log(this.state.EtapaConcluida)
    return (
      <AppTela >
        
        <TelaDadosGerais>
          {this.renderizarPagina()}
        </TelaDadosGerais>
      
      </AppTela>
    );
  }
  
}

export default App;
