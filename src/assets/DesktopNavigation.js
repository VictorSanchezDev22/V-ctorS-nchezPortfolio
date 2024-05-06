import styled from 'styled-components';

// Estilos globales
const Body = styled.body`
    margin-right:2;
    margin-left:2;
    padding: 1;
  font-family: "Poppins", sans-serif;
`;

// Componentes de navegación
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 17vh;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
  
  a {
    color: white;
    list-style: none;
  }
  
  a:hover {
    color: white;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: rgb(255,255,255);    
  }
`;

const Logo = styled.div`
  color: white; 
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    margin-right: 5rem;
  }
`;

const HamburgerNav = styled.nav`
  display: none;

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 17vh;
  }
`;

const HamburgerMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;

    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(10px,5px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }

    &:last-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(10px,-5px)' : 'none'};
    }
  }
`;

const MenuLinks = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  list-style: none;
  width: fit-content;
  max-height: ${({ isOpen }) => isOpen ? '300px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  a {
    color: white;
    list-style: none;
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: white;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: rgb(181, 181, 181);
  }
`;

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

// Sección "Acerca de"
const About = styled.section`
  position: relative;
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
  width:40%; 
  margin: 0 auto;
  margin-top: 5rem; 
  flex-direction: row;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin-top: 5rem; 
  }
`;

export {Body,Nav,NavLinks,Logo,HamburgerNav,HamburgerMenu,
    HamburgerIcon,MenuLinks};

export{Section,SectionContainer,SectionPicContainer,
    SectionText,OrangeGradientP,SectionTextP1,Title,BtnContainer,Btn,SocialsContainer,
    Icon };

export {About,AboutContainers,AboutDetailsContainer,AboutPic,
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