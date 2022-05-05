import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,

    pessoas: [ 
    {nomeUsuario: 'Paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150'},
    {nomeUsuario: 'João', fotoUsuario: 'https://picsum.photos/50/51', fotoPost: 'https://picsum.photos/200/151'},
    {nomeUsuario: 'Pedro', fotoUsuario: 'https://picsum.photos/50/52', fotoPost: 'https://picsum.photos/200/152'},
 
    ]
  }

  onClickCurtida = () => {
    this.setState({curtido : !this.state.curtido})
    const numeroAtual = this.state.numeroCurtidas
    const numeroAdc = numeroAtual + 1 

    this.setState({numeroCurtidas : numeroAdc})

     if (this.state.curtido === true) {
        const numCurtidas = this.state.numeroCurtidas
        this.setState({numeroCurtidas : numCurtidas -1})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    
    const listaDePostsPessoas = this.state.pessoas.map((pessoa, i) => {
      return (
      
          <PostHeader key={i}>
            <UserPhoto src={pessoa.fotoUsuario} alt={'Imagem do usuario'}/>
            <p>{pessoa.nomeUsuario}</p>
          </PostHeader>
          
      ) 
  }) 
  
    const listaDePostMain = this.state.pessoas.map((foto) => {
      return (
      <PostPhoto src={foto.fotoPost} alt={'Imagem do post'}/>
    )
 })
    
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } 
    
    else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return (<PostContainer>
      
      {listaDePostsPessoas[0]} {listaDePostMain[0]} <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      
      {listaDePostsPessoas[1]} {listaDePostMain[1]} <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {listaDePostsPessoas[2]} {listaDePostMain[2]}
      
      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>)
  
  }
}

export default Post