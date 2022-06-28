import styled from "styled-components"

export const FormTrip = styled.form`
    display: flex;
    flex-direction: column;
    box-shadow:  rgb(0 0 0 / 20%) 0px 2px 8px 0px;
    border-radius: 15px;
    width: 400px;
    padding: 30px;
    gap: 10px;
`
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    justify-content: center;
    align-items: center;
`
export const FormButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`
export const ButtonSend = styled.button`
    width: 90px;
    border: none;
    color: white;
    background-color: #1976d2;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    &:hover {
        background-color: #1669bb;
        transition: 0.5s;
    }
`
export const FormOption = styled.option`
    background-color: white;
    color: #1976d2;
`
export const FormInput =  styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid  #1976d2;
    border-radius: 5px;
    &:hover {
        background-color: #e9e9e9;
    }
`
export const FormSelect = styled.select`
    width: 405px;
    height: 35px;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #1669bb;
    }
`
export const H1Form = styled.h1`
    padding: 10px;
    color: #1976d2;
    border-bottom: 1px solid #1976d2;
    margin-top: 0px;
`