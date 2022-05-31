import React from 'react';
import CriarPlaylist from './Components/CriarPlaylist';
import styled from 'styled-components';
import VerPlaylists from './Components/VerPlaylists';

// Aplicação estilização
const Aplicacao = styled.div`
  background: url("https://images2.alphacoders.com/109/1093981.jpg");
  height: 970px;
`
// Header estilização
const Header = styled.div`
  display: flex;
  background-color: black;
  color: #1DB954;
  border-bottom: 1px solid black;
`
const Headerimg = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 18px;
`
// Footer estilização
const Footer = styled.div`
  bottom: 0;
  left: 0;
  height: 40px;
  position: fixed;
  width: 100%;
  background-color: black;
  text-align: center;
  color: white;
  padding: 10px;
`

class App extends React.Component {

  botaoVerPlaylists = () => {
    if(this.state.paginaAtual === 'criarPlaylists') {
        return <div>
                  <button onClick={this.trocarPagina}>Ver Playlists</button>
               </div>
    }
  }

  render() {

    return (
      <Aplicacao>
        <Header>
          <Headerimg src='https://logospng.org/download/spotify/logo-spotify-icon-2048.png'/>
          <h1>Labefy</h1>
        </Header>
        
        <CriarPlaylist/>
        <VerPlaylists/>
        {this.botaoVerPlaylists}
        
        <Footer>
            <p>© 2022 Todos os direitos reservados.</p>
        </Footer>
      </Aplicacao>
    )
  }
}

export default App;