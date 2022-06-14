import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as ReactBootstrap from 'react-bootstrap';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    background-color: black;
    padding-bottom: 10px;
    border-radius: 20px;
    padding: 10px;
`
const ImgCard = styled.img`
    width: 100%;
    height: 400px;
    border-radius: 15px;
`
const H4PersonName = styled.h4`
    margin-top: 20px;
    margin-left: 10px;
    color: white;
`
const H6PersonBio = styled.h6`
    margin-left: 10px;
    color: white;
    width: 96%;
`
const DivButtonsMainScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 20px;
    margin-top: 10px;
`	
const ButtonsMainScreenChoose = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    cursor: pointer;
    background-color: green;
    color: white;
    border: none;
        &:hover {
            background-color: #013f28;
        };
`
const ButtonsMainScreenReject = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bolder;
    background-color: red;
    border: none;
    color: white;
        &:hover {
            background-color: #5d0f02;
        };
`
const DivLoaderMainScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
`

const urlApi = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diogo-bomfim-hooks/person"

const MainScreen = () => {
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(false)
  
  const newMatch = () => {
        axios
            .get(urlApi)
            .then((response) => {
                setProfile(response.data.profile)
                setLoading(true)
            }
        )  
            .catch((error) => {
                alert("Something gone wrong!")
                console.log(error)
            }
        )
    }

    useEffect(() => {newMatch()}, [])

    const choosePerson = () => {
        const body = {
            id : profile.id,
            choice : true
        }

        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diogo-bomfim-hooks/choose-person`, body)
            .then(() => {
                newMatch()
            }
        )
            .catch((error) => {
                alert("Something gone wrong!")
                console.log(error)
            }
        )
    }
    
    const rejectPerson = () => {
        const body = {
            id : profile.id,
            choice : false
        }

        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diogo-bomfim-hooks/choose-person`, body)
            .then(() => {
                newMatch()
            }
        )
            .catch((error) => {
                alert("Something gone wrong!")
                console.log(error)
            }
        )
    }

    return (
        <Main>
            <Card>
                {loading ? <div><ImgCard src={profile.photo} alt="Person photo"/>
                    <H4PersonName>{profile.name}, {profile.age}</H4PersonName>
                    <H6PersonBio>{profile.bio}</H6PersonBio></div> : 
                    <DivLoaderMainScreen><ReactBootstrap.Spinner animation="border" variant="light"/></DivLoaderMainScreen>}
                    <DivButtonsMainScreen>
                        <ButtonsMainScreenReject onClick={() => rejectPerson()}>X</ButtonsMainScreenReject>
                        <ButtonsMainScreenChoose onClick={() => choosePerson()}>🤍</ButtonsMainScreenChoose>
                    </DivButtonsMainScreen>
            </Card>
        </Main> 
    );
}

export default MainScreen;
