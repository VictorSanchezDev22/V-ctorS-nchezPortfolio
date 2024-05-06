import styled from 'styled-components';

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

const Title = styled.h1`
  color:white; 
  font-size: 3rem;
  text-align: center;
`;

const Icon = styled.img`
  cursor: pointer;
  height: 2rem;
`;

// Sección "Acerca de"
const About = styled.section`
  position: relative;
`;

const CenterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Cambia a dirección de columna en dispositivos móviles */
  }
`;

const Aboutmetext = styled.p`
  color: white;
  width: 70%; 
  font-size: 1.50rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem; 
    text-align: center; /* Alinear el texto al centro en dispositivos móviles */
    margin-top: 10px; /* Agregar un poco de espacio superior en dispositivos móviles */
  }
`;

const StyledLink = styled.a`
  color: orange;
  text-decoration: none;
  font-weight: bold; 
  transition: color 0.3s ease; 
  
  &:hover {
    color: darkorange; 
  }
`;

const AboutContainers = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 1200px) {
    flex-wrap:wrap; 
  }
`;

const AboutDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;

  }
`;

const AboutPic = styled.img`
  border-radius: 2rem;
`;

const DetailsContainer = styled.div`
  padding: 1rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: 0.1rem solid rgb(163, 163, 163);
  text-align: center;
`;

export{SectionPicContainer,
    Title,
    Icon };

export {About,CenterText,Aboutmetext,StyledLink,AboutContainers,AboutDetailsContainer,AboutPic,
        DetailsContainer};

