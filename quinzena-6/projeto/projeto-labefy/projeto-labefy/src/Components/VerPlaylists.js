import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';

// Estilos Playlist //
const DivPlaylists = styled.div`
    display: flex;
    width: 100%;
    margin-top: 127px;
    justify-content: space-around;
`
const Playlists = styled.div`
    display: flex;
    width: 400px;
    text-align: center;
    flex-direction: column;
    background-color: black;
    border-radius: 15px;
    color: white;
    padding: 5px;
`
const UlPlaylist = styled.ul`
    display: flex;
    width: 20%;
`
const ButtonPlaylist = styled.button`
    cursor: pointer;
    background-color: black;
    border: none;
    border-bottom: 1px solid;
    color: #005000;
    font-weight: bolder;

    &:hover {
        transition: 0.5s;
        color: #1DB954;
    }
`
const ButtonPlaylistDeletar = styled.button`
    background-color: #5d0f02;
    border: none;
    font-weight: bolder;

    &:hover {
        background-color: red;
        cursor: pointer;
    }
`
const LiPlaylist = styled.li`
    display: flex;
    background-color: #1DB954;
    color: black;
    border-radius: 15px;
    padding: 5px;
    width: 100%;
    justify-content: center;
`
const DivButton = styled.div`
    display: flex;
    margin-left: 80px;
    gap: 5px;
`
const H2Playlists = styled.h2`
    background-color: #1DB954;
    color: black;
    border-radius: 15px;
`

// Estilos AddMúsica
const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    gap: 5px;
    margin-left: 10px;
    background-color: black;
    padding: 10px;
    border-radius: 15px;
`
const H2AddMusicas = styled.h2`
    text-align: center;
    color: white;
    border-radius: 15px;
`
const InputsAddMusicas = styled.input`
    border-radius: 15px;
    border: none;
    height: 25px;
    background-color: white;
    color: black;
    font-weight: bolder;
    text-align: center;
`

// Estilos Tracklist
const Tracklist = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`

const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers : {
        Authorization : "diogo-bomfim-hooks"
    }
}

class VerPlaylists extends React.Component {

    state = {
        playlists : [],
        tracklist : [],
        nomeMusica : '',
        nomeArtista : '',
        urlMusica : ''
    };
    
    componentDidMount() {
        this.mostrarTodasPlaylists()
    }

    mostrarTodasPlaylists = () => {
        axios
            .get(urlPlaylist, headers)
            .then((response) => {
                this.setState({playlists : response.data.result.list})
            }
        )
            .catch((error) => {
                alert("Algo deu errado :( ")
            }
        )
    }

    deletarPlaylist = (playlistId) => {
        if (window.confirm("Deseja mesmo apagar a playlist?")) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, headers)
                .then((response) => {
                    alert("Playlist apagada com sucesso!")
                    this.mostrarTodasPlaylists()
                }
            )
                .catch((error) => {
                    alert("Algo deu errado :( ")
                }
            )
        }
    }

    mostrarTracklist = (playlistId) => {
        axios 
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, headers)
            .then((response) => {
                this.setState({tracklist : response.data.result.tracks})
            }
        )
            .catch((error) => {
                alert(error.response)
            }
        )
    }

    addTrack = (playlistId) => {
        const body = {
            name : this.state.nomeMusica,
            artist : this.state.nomeArtista,
            url : this.state.urlMusica
        }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, headers)
            .then((response) => {
                alert("Música adicionada com sucesso!")
                this.setState({nomeMusica : ''})
                this.setState({nomeArtista : ''})
                this.setState({urlMusica : ''})
            }
        )
            .catch((error) => {
                alert("Algo deu errado :( ")
            }
        )
    }
    
    onChangeNomeMusica = (event) => {
        this.setState({nomeMusica : event.target.value})
    }

    onChangeNomeArtista = (event) => {
        this.setState({nomeArtista : event.target.value})       
    }

    onChangeUrlMusica = (event) => {
        this.setState({urlMusica : event.target.value})
    }
   
  render() {

    const playlistExistente = this.state.playlists.map((playlist) => {
        return <div key={playlist.id}>
                    <UlPlaylist>
                        <b><LiPlaylist>{playlist.name}</LiPlaylist></b>
                    </UlPlaylist>
                    <DivButton>
                        <ButtonPlaylist onClick={() => this.mostrarTracklist(playlist.id)}>Ver Playlist</ButtonPlaylist>
                        <ButtonPlaylist onClick={() => this.addTrack(playlist.id)}>Adicionar música</ButtonPlaylist>
                        <ButtonPlaylistDeletar onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</ButtonPlaylistDeletar>
                    </DivButton>
                </div>
    }
)

    const tracklistExistente = this.state.tracklist.map((track) => {
        return <div key={track.id}>
                    <ul>
                        <b><b>Música: </b>{track.name}</b>
                    </ul>
                    <ul>
                        <b>Cantor: </b>{track.artist}
                    </ul>
                    <ul>
                        <ReactAudioPlayer src={track.url} controls/>
                    </ul>
               </div>
    }
)

    return (
      <div>
         <DivPlaylists>
            <DivInputs>
                <H2AddMusicas>Adicionar música</H2AddMusicas>
                <InputsAddMusicas placeholder='Nome da música' value={this.state.nomeMusica} onChange={this.onChangeNomeMusica}/>
                <InputsAddMusicas placeholder='Nome do artista' value={this.state.nomeArtista} onChange={this.onChangeNomeArtista}/>
                <InputsAddMusicas placeholder='Url da música' value={this.state.urlMusica} onChange={this.onChangeUrlMusica}/>
            </DivInputs>
    
             <Playlists>
                 <H2Playlists>Playlists</H2Playlists>
                {playlistExistente }
             </Playlists>
            
             <Tracklist>
                {tracklistExistente}
            </Tracklist>
            
         </DivPlaylists>
      </div>
    )
  }
}

export default VerPlaylists;