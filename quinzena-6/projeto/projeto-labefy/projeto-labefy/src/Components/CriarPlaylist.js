import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LayoutPlaylist = styled.div`
    display: flex;
    justify-content: center;
`
const CardCriarPlaylist = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    margin-top: 50px;
    padding: 10px;
    border-radius: 15px;
    color: white;
    background-color: black;
`
const LayoutPlaylistInput = styled.input`
   height: 25px;
   border-radius: 30px;
   border: none;
   text-align: center;
`
const LayoutPlaylistButton = styled.button`
   height: 25px;
   font-weight: bolder;
   border-radius: 30px;
   border: none;
   background-color: #1DB954;
   color: black;
    
   &:hover {
        transition: 0.5s;
        background-color: black;
        color: #1DB954;
        cursor: pointer;
    }
`
const LayoutPlaylistH3 = styled.h3`
    padding-right: 20px;
    padding-left: 20px;
`

const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers : {
        Authorization : "diogo-bomfim-hooks"
    }
}

class CriarPlaylist extends React.Component {

    state = {
        nomePlaylist : ''
    }

    onChangeNomePlaylist = (event) => {
        this.setState({nomePlaylist : event.target.value})
    }

    criarPlaylist = () => {
        const body = {
            name : this.state.nomePlaylist
        }
        
        axios 
            .post(urlPlaylist, body, headers)
            .then((response) => {
                alert(`A playlist ${body.name} foi criada`)
                this.setState({nomePlaylist : ''})
            }
        )
            .catch((error) => {
                alert("Ocorreu um erro, a playlist não foi criada")
            }
        )
    } 

  render() {

    return (
      <div>
          
          <LayoutPlaylist>
              <CardCriarPlaylist>
                  <LayoutPlaylistH3>Crie sua Playlist</LayoutPlaylistH3>
                  <LayoutPlaylistInput placeholder='Nome da Playlist' 
                  type="name" 
                  value={this.state.nomePlaylist} 
                  onChange={this.onChangeNomePlaylist}/>
                  <LayoutPlaylistButton onClick={this.criarPlaylist}>Criar Playlist</LayoutPlaylistButton>
              </CardCriarPlaylist>
          </LayoutPlaylist>
      </div>
    )
  }
}

export default CriarPlaylist;