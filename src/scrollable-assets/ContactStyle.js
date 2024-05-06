import styled from "styled-components";

const Section = styled.div`
  margin-top: 30rem;
  margin-bottom : 30rem;
`;

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

const SloganPhrase = styled.div`
  color: white;
  font-size: 8rem;
  font-weight: 600;
  margin-left:7rem; 
  margin-top: 2rem; 
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

const Cajon = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center; 
  margin-bottom: 5rem;
`;

const Form = styled.form`
  align-items : center;
  width: 500%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  margin-left: 10rem;

  @media screen and (max-width: 768px) {
    margin: 0; 
    width: 80%;
  }
`;

const Label = styled.label`
  color : white; 
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.input`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  width:100%; 
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledParagraph = styled.p`
  margin-left: 5px; /* Margen izquierdo de 5px */
  color: white; /* Color blanco */
`;

export {Section,MainContent,FlexContainer,StyledImage, SloganPhrase, Cajon, Form,Label,Input, TextArea, SubmitButton, StyledParagraph};