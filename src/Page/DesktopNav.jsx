import React from 'react';

import {Body,Nav,NavLinks,Logo,HamburgerNav,HamburgerMenu,HamburgerIcon,MenuLinks} from '../assets/DesktopNavigation';
import {Section,SectionContainer,SectionPicContainer,
  SectionText,SectionTextP1,Title,BtnContainer,Btn,SocialsContainer,Icon } from '../assets/DesktopNavigation';

import { About, AboutContainers, AboutDetailsContainer, AboutPic, Arrow, DetailsContainer} from '../assets/DesktopNavigation';

import {ExperienceContainer, ExperienceSubTitle, ExperienceDetailsContainer, ArticleContainer,
  Article }  from '../assets/DesktopNavigation';

const HomePage = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleCVDownload = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const cvURL = '/cv';
  
      if (isMobile) {
        window.location.href = cvURL;
      } else {
        window.open(cvURL, '_blank');
      }
    };
    
    return (
      <>
        <Body>
        { /* DESKTOP NAV */ }
          <Nav id="desktop-nav">
            <Logo>Víctor Sánchez</Logo>
            <NavLinks>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </NavLinks>
          </Nav>
        { /* HAMBURGER NAV */ }
        <HamburgerNav id="hamburger-nav">
          <Logo>Víctor Sánchez</Logo>
          <HamburgerMenu>
            <HamburgerIcon isOpen={isOpen} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerIcon>
            <MenuLinks isOpen={isOpen}>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </MenuLinks>
          </HamburgerMenu>
        </HamburgerNav>

        { /* SECTIONS */ }
        <Section id="profile">
          <SectionContainer className="section-container">
            <SectionPicContainer className="section_pic-container">
              <img src="/png/FOTO_formal2023.png" alt="Víctor Sanchez Foto de Perfil" />
            </SectionPicContainer>
            <SectionText className="section_text">
              <SectionTextP1 className="section_text_p1">Hola, soy</SectionTextP1>
              <Title className="title">Víctor Sánchez</Title>
              <p className="section_text_p2">Frontend Developer</p>
              <BtnContainer className="btn-container">
                <Btn className="btn btn-color-2" onClick={handleCVDownload}>Download CV</Btn>
                <Btn className="btn btn-color-2" onClick={handleCVDownload}>Contactame</Btn>
              </BtnContainer>
              <SocialsContainer id="socials-container">
                <a href="https://www.linkedin.com/in/victor-s%C3%A1nchez-i%C3%B1iguez-b0849a224/" target="_blank" rel="noopener noreferrer" >
                  <Icon src="/png/linkedin.png" alt="My Linkedin profile" className="icon" />
                </a>
                <a href="https://github.com/VictorSanchezDev22" target="_blank" rel="noopener noreferrer" >
                  <Icon src="/png/gitHub.png" alt="My GitHub profile" className="icon" />
                </a>
              </SocialsContainer>
            </SectionText>
          </SectionContainer>
        </Section>

      { /* SECTION ABOUT */ }
        <About id="about">
        <SectionTextP1>Conoceme</SectionTextP1>
        <Title>Sobre Mi</Title>
        <AboutContainers>
          <SectionPicContainer>
            <AboutPic src="/png/LogosVSIgranateVerde.png" alt="Profile picture" />
          </SectionPicContainer>
          <AboutDetailsContainer>
            <AboutContainers>
              <DetailsContainer>
                <Icon src="/png/experience.png" alt="Experience-icon" />
                <h3>Experiencia</h3>
                <p>6 meses <br />Desarrollo FullStack con React JS y NodeJS</p>
                <p>2+ años <br />Desarrollo Frontend</p>
                <p>2 años <br />Analisis y Creación de contenidos para SEO</p>
              </DetailsContainer>
              <DetailsContainer>
                <Icon src="/png/education.png" alt="Education-icon" />
                <h3>Education</h3>
                <p>Técnico Superior en Desarrollo de Aplicaciones <br />Game Development</p>
                <p>Bachillerato Tecnologico<br /></p>
              </DetailsContainer>
            </AboutContainers>
            <div className="text-container">
              <p style={{color:'white'}}>
                Competencias Digitales Lenguajes de Programación (C#, Kotlin,
                Node.js) Desarrollo de Videojuegos y Animaciones con
                UNITY 3D. BBDD Relacionales (PostgreSQL), como
                NoSQL (MongoDB, JSON). Nivel Intermedio en desarrollo web (REACT JS,
                HTML5, CSS, XML y XSLT) Diseño 2D con Krita y diseño 3D con Blender y
                FreeCAD. IDE utilizados (Visual Studio, Rider, DataGrip,
                Visual Studio Code)
              </p>
            </div>
            <Arrow>
          <Icon src="/png/arrow.png" alt="Arrow Icon" />
          </Arrow>
          </AboutDetailsContainer>
          
        </AboutContainers>
      </About>

    {/*EXPERIENCE SECTION*/}
      <ExperienceContainer id ="experience">
        <SectionTextP1>Esta es mi</SectionTextP1>
        <Title>Experiencia</Title>
        <ExperienceDetailsContainer class="experience-details-container">
          <AboutContainers class="about-containers">
            <DetailsContainer class="details-containers">
              <ExperienceSubTitle >Frontent Development</ExperienceSubTitle>
              <ArticleContainer class="article-container">
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>HTML</h3>
                    <p>Experto</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>CSS</h3>
                    <p>Experto</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>JAVASCRIPT</h3>
                    <p>Basico</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>GIT</h3>
                    <p>Intermedio</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>PostGreSQL</h3>
                    <p>Basico</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermedio</p>
                  </div>
                </Article>
              </ArticleContainer>
            </DetailsContainer>
          </AboutContainers>
        </ExperienceDetailsContainer>
      </ExperienceContainer>
      </Body>

      </>
    );
  };
export default HomePage;