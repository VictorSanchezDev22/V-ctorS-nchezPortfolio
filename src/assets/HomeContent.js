import styled from "styled-components";

//Granate #6A040F 
// Azul Oscuro #03071E
//Naranja #E85D04
//Naranja Amarillento #FFBA08

const MainContent = styled.div`
min-height: 50rem;
`;

const SloganContainer = styled.div`
  position: flex;
  z-index: -1;
  top: 15%;
  width: 100%;
  animation-name: slogan;
  animation-duration: 1.5s;
  margin-bottom: 5rem; 

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    height: 2.5rem;
    width: 7rem;
    right: 2rem;
    border-width: 0px;
    border-radius: 1rem;
    cursor: pointer;
    padding: 0px 30px;
    font-weight: 900;

    @media only screen and (max-width: 1160px) {
      div p {
        font-size: 5vw;
        width: 70%;
      }
      div span {
        font-size: 13vw;
      }
    }
  
    @media only screen and (max-width: 800px) {
      div p {
        font-size: 7vw;
      }
    }
  
    @media only screen and (max-width: 800px) {
      text-align: center;
      top: 48%;
      animation-name: slogan-mobile;
      animation-duration: 1.5s;
  
      div p {
        padding: 0 40px;
        width: 100%;
      }
    }
  
    @keyframes slogan {
      0% {
        opacity: 0%;
        top: 30%;
      }
      100% {
        opacity: 100%;
        top: 15%;
      }
    }
  
    @keyframes slogan-mobile {
      0% {
        opacity: 0%;
        top: 55%;
      }
      100% {
        opacity: 100%;
        top: 48%;
      }
    }
`;

const CircleImage = styled.img`
  width: 15rem; // o cualquier otro tamaño que prefieras
  height: 15rem; // debe ser igual al ancho para un círculo perfecto
  border-radius: 50%; // esto hace que la imagen sea redonda
  object-fit: cover; // esto asegura que la imagen cubra todo el espacio sin distorsionarse
  border: 3px solid white; // opcional: añade un borde si lo deseas
  margin-bottom: 1rem;

`;

const SloganPhrase = styled.div`
  color: white;
  font-size: 10rem;
  padding-left: 6.25rem;
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
    padding-left: 0;
    font-size : 5rem;
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

const Descripcion = styled.div`
  color: #00C8FF; /* Cambiando a un color menos llamativo */
  font-size: 4rem; /* Reduciendo el tamaño del texto */
  padding-left: 6.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif; /* Cambiando a una fuente más distintiva */

  /* Eliminando el efecto de gradiente */
  background: none;
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;

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
    padding-left: 0;
    font-size : 1.5rem; /* Reduciendo aún más el tamaño del texto */
    p, span {
      font-size: 0.1rem; /* Ajustando un poco más pequeño para mejor visualización */
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background-color: #707070; /* Cambiando el color del subrayado a uno menos llamativo */
    animation: underlineAnimation 2s infinite;
  }
`;


const ContentButtons = styled.button`
  background-color: #333; // Un color que contraste con el naranja
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f60; // Un color similar al naranja de la imagen
    color: #333;
  }
`;


export {MainContent,Descripcion, SloganContainer,CircleImage, SloganPhrase,ContentButtons };