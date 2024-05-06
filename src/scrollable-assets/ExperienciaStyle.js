import styled from 'styled-components';

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
const AboutContainers = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 1200px) {
    flex-wrap:wrap; 
  }
`;

const DetailsContainer = styled.div`
  padding: 1rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: 0.1rem solid rgb(163, 163, 163);
  text-align: center;
`;

// Sección "Experiencia"
const ExperienceContainer = styled.div`
  position: relative;
  padding : 2rem; 
`;

const ExperienceSubTitle = styled.h2`
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
`;

const ExperienceDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`;

const ArticleContainer = styled.div`
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
`;

const Article = styled.article`
  display: flex;
  width: 8rem;
  justify-content: space-around;
  gap: 0.5rem;
`;

const ArticleIcon = styled.div`
  cursor: default;
`;

const CenteredImage = styled.img`
  display: block;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 80%; /* Reducir el ancho al 80% */
    margin: 0 auto; /* Centrar horizontalmente */
  }
`;


const ReactIcon = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 5rem; 
  
  @media screen and (max-width: 768px) {
    width: 50%;
    margin-top: 5rem; 
  }
`;

const GA = styled.img`
  display: block;
  width: 20%; 
  margin: 0 auto;
  margin-top: 3rem; 
  flex-direction: row;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin-top: 5rem; 
  }
`;

export{Title,
    Icon };

export {AboutContainers,
        DetailsContainer};

export { 
  ExperienceContainer, 
  ExperienceSubTitle, 
  ExperienceDetailsContainer, 
  ArticleContainer, 
  Article, 
  ArticleIcon , 
  CenteredImage,
  ReactIcon, 
  GA
};