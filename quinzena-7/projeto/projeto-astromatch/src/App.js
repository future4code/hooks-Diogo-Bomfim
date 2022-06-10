import React, {useState} from 'react'
import MainScreen from './Components/MainScreen';
import MatchScreen from './Components/MatchScreen';
import styled from 'styled-components';

const DivImageButton = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin: 0 auto;
  width: 400px;
`
const ImgShowMatches = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    };
`
const ImgGoMainScreen = styled.img`
    width: 42px;
    height: 42px;
    margin-top: 10px;
    margin-bottom: 5px;
    cursor: pointer;
      &:hover {
        transform: scale(1.2);
        transition: 0.5s;
    };
`
const H4Title = styled.h4`
    display: flex;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 130px;
    color: white;
    background-color: black;
    border: 1px solid black;
    border-radius: 15px;
    padding: 10px;
`

const App = () => {
  const [screen, setScreen] = useState("MainScreen")
  
  const onClickMatchScreen = () => {
    setScreen("MatchScreen")
  }

  const onClickMainScreen = () => {
    setScreen("MainScreen")
  }

  switch (screen) {
    case "MainScreen":
      return <div>  
              <DivImageButton>
                <H4Title>AstroMatch</H4Title>
                <ImgShowMatches
                  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcm
                  cvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcm9sZT0icHJlc2VudGF0aW9uIiBj
                  bGFzcz0ic2MtalR6TFRNIGpDV2JzcSIgc3R5bGU9IndpZHRoOiAyLjI1cmVtOyBoZWlnaHQ
                  6IDIuMjVyZW07Ij48cGF0aCBkPSJNMjIuNTksNy45MkwyMy43NSw5LjMzTDE5LDE0LjA4TDE
                  2LjI1LDExLjA4TDE3LjQxLDkuOTJMMTksMTEuNUwyMi41OSw3LjkyTTYsNUEzLDMgMCAwLDEg
                  OSw4QTMsMyAwIDAsMSA2LDExQTMsMyAwIDAsMSAzLDhBMywzIDAgMCwxIDYsNU0xMSw1QTMsMy
                  AwIDAsMSAxNCw4QTMsMyAwIDAsMSAxMSwxMUMxMC42OCwxMSAxMC4zNywxMC45NSAxMC4wOCwxM
                  C44NUMxMC42NSwxMC4wNCAxMSw5LjA2IDExLDhDMTEsNi45NCAxMC42NSw1Ljk1IDEwLjA4LDUuM
                  TRDMTAuMzcsNS4wNSAxMC42OCw1IDExLDVNNiwxM0M4LDEzIDEyLDE0IDEyLDE2VjE4SDBWMTZDMC
                  wxNCA0LDEzIDYsMTNNMTIuNjIsMTMuMTZDMTQuNjMsMTMuNSAxNywxNC40NiAxNywxNlYxOEgxNFYx
                  NkMxNCwxNC44MiAxMy40NSwxMy44OCAxMi42MiwxMy4xNloiLz48L3N2Zz4=' onClick={() => onClickMatchScreen()} alt="Icon to go match screen"/>
              </DivImageButton>
              <MainScreen/>
             </div>
      
    case "MatchScreen":
      return <div>
              <DivImageButton>
                <H4Title>AstroMatch</H4Title>
                <ImgGoMainScreen src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3d
                  y53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcm9sZT0icHJlc2VudGF0aW9uIiBj
                  bGFzcz0ic2Mta0F6ekdZIGpnRGdnSCIgc3R5bGU9IndpZHRoOiAxLjVyZW07IGhlaWdodDogMS41cmV
                  tOyI+PHBhdGggZD0iTTE2LDlDMTguMzMsOSAyMywxMC4xNyAyMywxMi41VjE1SDE3VjEyLjVDMTcsMTE
                  gMTYuMTksOS44OSAxNS4wNCw5LjA1TDE2LDlNOCw5QzEwLjMzLDkgMTUsMTAuMTcgMTUsMTIuNVYxNUg
                  xVjEyLjVDMSwxMC4xNyA1LjY3LDkgOCw5TTgsN0EzLDMgMCAwLDEgNSw0QTMsMyAwIDAsMSA4LDFBMywz
                  IDAgMCwxIDExLDRBMywzIDAgMCwxIDgsN00xNiw3QTMsMyAwIDAsMSAxMyw0QTMsMyAwIDAsMSAxNiwxQ
                  TMsMyAwIDAsMSAxOSw0QTMsMyAwIDAsMSAxNiw3TTksMTYuNzVWMTlIMTVWMTYuNzVMMTguMjUsMjBMMTU
                  sMjMuMjVWMjFIOVYyMy4yNUw1Ljc1LDIwTDksMTYuNzVaIi8+PC9zdmc+' onClick={() => onClickMainScreen()} alt="Icon to go Main Screen"/>
                </DivImageButton>
              <MatchScreen/>
             </div>

    default:
      alert("Something gone wrong!")
  }
}

export default App;
