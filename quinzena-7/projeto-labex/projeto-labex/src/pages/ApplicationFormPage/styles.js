import styled from "styled-components";

export const FormDiv = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
`
export const FormContainer = styled.div`
    box-shadow:  rgb(0 0 0 / 20%) 0px 2px 8px 0px;
    border-radius: 15px;
    padding: 40px;
    margin-top: 50px;
` 
export const FormDef = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const FormInput =  styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid  #1976d2;
`
export const FormTextArea = styled.input`
    width: 400px;
    height: 80px;
    resize: none;
    border: 1px solid  #1976d2;
`
export const FormButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`
export const FormSelect = styled.select`
    width: 405px;
    height: 25px;
    background-color: #1976d2;
    color: white;
    border: none;
`
export const FormOption = styled.option`
    background-color: white;
    color: #1976d2;
`
export const FormH1Div = styled.div`
    display: flex;
    justify-content: center;
`
export const FormH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    background-color: #1976d2; 
    color: white;
    padding: 10px;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    margin-top: 100px;
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