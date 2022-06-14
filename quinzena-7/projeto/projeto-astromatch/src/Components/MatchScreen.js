import React, {useEffect, useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import * as ReactBootstrap from 'react-bootstrap';

const ScreenMatch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CardMatch = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    height: 600px;
    background-color: black;
    border-radius: 20px;
    padding: 10px;
    gap: 10px;
`
const Matches = styled.div`
    display: flex;
    color: white;
    gap: 10px;
    padding: 5px;
    cursor: pointer;
    border: 1.5px solid white;
    border-radius: 15px;
        &:hover {
            background-color: white;
            color: black;
            padding: 5px;
        };
`
const ImgCardMatch = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 25px;
`
const ImgDeleteIcon = styled.img`
    width: 45px;
    cursor: pointer;
    background-color: white;
    border: 1px solid black;
    border-radius: 25px;
    padding: 5px;
    margin-top: 10px;
        &:hover {
            transform: scale(1.2);
            transition: 0.5s;
        };
`
const DivEmptyMatches = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 250px;
` 
const EmptyMatchesP = styled.p`
    border: 1px solid white;
    color: white;
    padding: 10px;
    border-radius: 15px;
`
const DivLoaderMatchScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
`	

const MatchScreen = () => {
    const [matchList, setMatchList] = useState([])
    const [loading, setLoading] = useState(false)

    const getMatchList = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diogo-bomfim-hooks/matches")
            .then((response) => {
                setMatchList(response.data.matches)
                setLoading(true)
            }
        )
            .catch((error) => {
                alert("Something gone wrong!")
                console.log(error)
            }
        )
    }

    useEffect(() => {getMatchList()}, [getMatchList()])

    const deleteAllMatches = () => {
        axios
            .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diogo-bomfim-hooks/clear")
            .then(() => {
                alert("All matches were deleted suceffuly")
            }
        )
            .catch((error) => {
                alert("Something gone wrong!")
                console.log(error)
            }
        )
    }
    
    const renderMatchList = matchList.map((match) => {
        return <Matches key={match.id}>
                    <ImgCardMatch src={match.photo}/>
                    <p>{match.name}</p>  
                </Matches>   
        }
    )

    const ifListEmpty = () => {
        if (matchList.length === 0) {
            return <DivEmptyMatches>
                        <EmptyMatchesP>You don`t have any matches :c</EmptyMatchesP>
                   </DivEmptyMatches>
        }

        else if (matchList.length !== 0) {
            return <CardMatch>
                        {renderMatchList}
                   </CardMatch>
        }
    }

    return (
        <ScreenMatch>
                <CardMatch>
                    {loading ? ifListEmpty() : <DivLoaderMatchScreen><ReactBootstrap.Spinner animation="border" variant="light"/></DivLoaderMatchScreen>}
                </CardMatch>
                <ImgDeleteIcon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5v
                cmcvMjAwMC9zdmciIGNsYXNzPSJNdWlTdmdJY29uLXJvb3QiIGZvY3VzYWJsZT0iZmFsc2UiIH
                ZpZXdCb3g9IjAgMCAyNCAyNCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGQ9Ik02IDE5YzAgMS
                4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6TTE5IDRoLTMuNWwtMS0xaC01bC0xID
                FINXYyaDE0VjR6Ii8+PC9zdmc+" onClick={() => deleteAllMatches()} alt="Trashcan to delete all matches"/>
        </ScreenMatch>
    )
};

export default MatchScreen;