import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from "styled-components"

const NovoCardGrande = styled.div`
.bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    width: 400px;
}

.bigcard-container > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.bigcard-container h4 {
    margin-bottom: 15px;
}

.bigcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`

const NovoCardPequeno = styled.div`
.smallcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    margin-bottom: 10px;
    height: 50px;
    width: 400px;
}
`

const NovoImgButton = styled.div`
.image-button-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
}

.image-button-container > img {
    width: 30px;
    margin-right: 10px;
}
`

function App() {
  return (
    <div className="App">
      
        <NovoCardGrande>
          <h2>Dados pessoais</h2>
          <CardGrande 
            imagem="https://avatars.githubusercontent.com/u/98038433?v=4" 
            nome="Diogo Bomfim" 
            descricao="Olá, eu sou o Diogo, tenho 19 anos e estudo desenvolvimento web fulltstack na Labenu"
          />
          
          <NovoImgButton>
            <ImagemButton 
              imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
              texto="Ver mais"
            />
          </NovoImgButton>
        
        </NovoCardGrande>
      
          <NovoCardPequeno>
            <CardPequeno
              email="Email: Diogohbomfim@gmail.com"
            />
          </NovoCardPequeno>
        
        <NovoCardPequeno>
          <CardPequeno
            endereco="Endereço: Rua Maria Sinole Santos"
          />
        </NovoCardPequeno>
      
        <NovoCardGrande>
          <h2>Experiências profissionais</h2>
          <CardGrande 
            imagem="https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB" 
            nome="Labenu" 
            descricao="Estudando Desenvolvimento Web FullStack." 
          />
          
          <CardGrande 
            imagem="https://hs.unit.br/hs-fs/hubfs/LOGOS.jpg?width=624&name=LOGOS.jpg" 
            nome="Universidade Tiradentes" 
          descricao="Estudando Sistemas de Informação 4º período." 
          />
        </NovoCardGrande>
  
        <NovoCardGrande>
          <h2>Minhas redes sociais</h2>
          <NovoImgButton>
            <ImagemButton 
              imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
              texto="Facebook" 
            />        
    
            <ImagemButton 
              imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
              texto="Twitter" 
            />    
          </NovoImgButton>
        </NovoCardGrande>    
      
    </div>
  );
}

export default App;
