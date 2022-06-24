import styled from "styled-components"

export const LoginForm = styled.form`
    display: flex;
    width: 450px;
    height: 40vh;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow:  rgb(0 0 0 / 20%) 0px 2px 8px 0px; 
    border-radius: 15px;
`
export const InputForm = styled.input`
    width: 310px;
    height: 30px;
    border: 1px solid  #1976d2;
    border-radius: 5px;
    &:hover {
        background-color: #e9e9e9;
    }
`
export const DivButtons = styled.div`
    display: flex;
    gap: 10px;
`
export const H1Form = styled.h1`
    padding: 10px;
    color: #1976d2;
    border-bottom: 1px solid #1976d2;
    margin-top: 0px;
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
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`