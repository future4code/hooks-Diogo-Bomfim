import styled from "styled-components"

export const CardAreas = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 15%;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const CardPublicArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 370px;
    height: 250px;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 28px 28px 57px #a6a6a6, -28px -28px 57px #ffffff;
    &:hover {
        
    }
`
export const CardPrivateArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 370px;
    height: 250px;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 28px 28px 57px #a6a6a6, -28px -28px 57px #ffffff;
    &:hover {
        
    }
`	
export const H2Areas = styled.h2`
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
`