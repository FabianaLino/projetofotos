import React from "react";
import { Container } from "./styled";

export const Home=()=>{
    return(
        <Container>
            <div className="container-total">
                <div className="container-foto">
                    <div className="foto">
                        <img className="foto-principal" alt="Foto Fotografo" src="fotohome.png" width={888} height={500} /> 
                        <div className="titulo-principal">
                            <h1>FOTOS & FILMAGENS</h1>   
                        </div>                                             
                    </div>
                </div>
                <div className="container-bio">
                    <h2>Quem sou eu:</h2>
                    <p>Fotógrafo profissional que se dedica à arte e à prática de capturar imagens por meio de uma câmera. Tenho a habilidade de contar histórias, transmitir emoções e capturar momentos únicos através das minhas fotografias.</p>
                    <button className="botao-conhecer">Conhecer Portfólio</button>
                </div>                                 
            </div>
        </Container>
    );
};