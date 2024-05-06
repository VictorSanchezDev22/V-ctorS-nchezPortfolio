import styled from "styled-components";

const MainContent = styled.div`
  @media only screen and (max-width: 50rem) {
    align-items: center;     
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
`;

const StyledImage = styled.img`
  width:100%; /* Ancho del 100% del contenedor */
  max-width: 50px; /* Ancho máximo de 300px */
  height: auto; /* Altura automática para mantener la proporción */
  border-radius: 8px; /* Borde redondeado */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  margin-left: 2rem; 
`;

const BoxContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Esto permite que los BoxContainer se envuelvan en dispositivos pequeños */
  justify-content: center;
  margin-top: 5rem;
  margin-left: -2rem;
  @media only screen and (max-width: 50rem) {
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10rem;
  margin-bottom: 1.5rem;
  padding: 10px; // Reducido el padding
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  width: 20rem; // Establece el ancho a un tamaño menor
  height: 20rem; // Establece la altura para mantener la proporción

  @media only screen and (max-width: 50rem) {
    margin-left: 2rem;
    width:80%;
    font-size : 4rem;
  }
`;

const BoxImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); // Un efecto más sutil al pasar el cursor
  }
 
`;

const BoxDescription = styled.div`
  padding: 5px; // Reducido el padding
  text-align: center;
  color: white; // Cambiado el color de texto a blanco
  font-size: 1rem; // Reducido el tamaño de la letra
  margin-top: 1rem;
`;

const SloganPhrase = styled.div`
  color: white;
  font-size: 8rem;
  margin-left:7rem; 
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif; /* Cambiando a una fuente más distintiva */

  /* Updating the gradient effect to be more vibrant */
  background: linear-gradient(45deg, #ff4e50, #f9d423);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  p {
    line-height: 1;
  }

  span {
    line-height: 0.1;
    padding-left: 0.625rem;
    letter-spacing: 0.3125rem;
    font-weight: 900;
    font-size: 7vw;
    display: inline-block;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.5); /* Manteniendo la sombra para profundidad */
  }

  /* Responsive adjustments */
  @media only screen and (max-width: 50rem) {
    width:100%;
    font-size : 2.8rem;
    margin-top: 0.625rem;
    margin-left: 3rem;
    p, span {
      font-size: 0.1rem; /* Ajustando un poco más pequeño para mejor visualización */
    }
  }

  /* Extra visual slogan effect: animated underline */
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background-color: #f9d423; /* A color that matches the gradient */
    animation: underlineAnimation 2s infinite;
  }

  @keyframes underlineAnimation {
    0% { width: 0; }
    50% { width: 100%; }
    100% { width: 0; }
  }
`;

export {MainContent,FlexContainer,StyledImage, BoxContainerWrapper,BoxContainer,BoxImage,BoxDescription, SloganPhrase };