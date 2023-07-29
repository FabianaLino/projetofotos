import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    .container-total{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(#46697d, #506070, #242b28);  
    }

    .container-foto{
        width: 65%;
        background-image: linear-gradient(#46697d, #506070, #242b28);        
    
    }

    .titulo-principal{
        font-family: 'Ysabeau+SC';
        font-size: 30px;
    }

    .container-bio{
        margin: 30px;
        width: 75%;  
        background-image: linear-gradient(#46697d, #87332d, #242b28);        
    }

    .titulo2{
        font-size: 50px;
    }
    
    h2 {
        display: block;
        font-size: 3em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }

    p {
        font-size: 30px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .botao-conhecer {
        margin: 10px;
        padding: 20px 80px;
        font-size: 20px;
        cursor: pointer;
        color: #de040f;
        background-color: darkorange;
        font-family: fantasy;
        border-radius: 10px;
    }
`;