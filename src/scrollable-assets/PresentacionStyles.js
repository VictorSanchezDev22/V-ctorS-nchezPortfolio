import styled from 'styled-components';

// Componentes de sección
const Section = styled.section`
  height: 80vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 0 ;
    height :fit-content;
    margin-bottom:6rem;
  }
`;

const SectionContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
    height :fit-content;
  }
`;

const SectionPicContainer = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;

  @media screen and (max-width: 1200px) {
    width:275px;
    height: 275px;
    margin: 0 auto 2rem; 
  }

  @media screen and (max-width: 700px) {
    width:200px;
    height: 200px;
  }
`;

const SectionText = styled.div`
  color: white;
  margin-left: 2rem;
  align-self: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
  }
`;

const SectionTextP1 = styled.p`
  font-size : 1.25rem; 
  font-weight: 600;
  text-align: center;
`;

const OrangeGradientP = styled.p`
  background: linear-gradient(45deg, #FFA500, #FF6347); /* Gradiente naranja */
  -webkit-background-clip: text; /* Clip de texto para aplicar el gradiente al texto */
  -webkit-text-fill-color: transparent; /* Color de texto transparente para permitir que el gradiente sea visible */
  font-weight: bold; /* Letra más gruesa */
  font-size: 1.5rem; /* Fuente más grande */
`;

const Title = styled.h1`
  color:white; 
  font-size: 3rem;
  text-align: center;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Btn = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 2px solid #000;
  color: #000;
  padding: 10px 20px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Icon = styled.img`
  cursor: pointer;
  height: 2rem;
`;


export{Section,SectionContainer,SectionPicContainer,
    SectionText,OrangeGradientP,SectionTextP1,Title,BtnContainer,Btn,SocialsContainer,
    Icon };
