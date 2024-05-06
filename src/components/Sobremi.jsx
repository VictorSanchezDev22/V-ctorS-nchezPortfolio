import React from 'react';

import {SectionPicContainer,Title,Icon } from '../scrollable-assets/SobremiStyle.js';

import { About,CenterText,Aboutmetext,StyledLink, AboutContainers, AboutDetailsContainer, AboutPic, DetailsContainer} from '../scrollable-assets/SobremiStyle.js';

const Sobremi = () => {

    return (
      <>
      { /* SECTION ABOUT */ }
      <About id="about">
        <Title>Sobre Mi</Title>
        <CenterText>
        <Aboutmetext>Soy programador y actualmente estoy especializado en desarrollar aplicaciones Web con un estilo personalizado.
                    En esta web podrás ver algunos ejemplos en la sección de <StyledLink href="#proyectos">proyectos</StyledLink>, 
                    si quieres saber con qué tecnologías puedo trabajar lo podrás ver en  <StyledLink href="#experience">experiencia</StyledLink>.
                    Y si tienes alguna duda o te gustaría contactar conmigo en la página de <StyledLink href="#contacto">contacto</StyledLink>, puedes mandarme un correo automático.
        </Aboutmetext>
        </CenterText>
        <AboutContainers>
          <SectionPicContainer>
            <AboutPic src="/png/LogosVSIgranateVerde.png" alt="Profile picture" />
          </SectionPicContainer>
          <AboutDetailsContainer>
            <AboutContainers>
              <DetailsContainer>
                <Icon src="/png/experience.png" alt="Experience-icon" />
                <h3>Experiencia</h3>
                <p>6 meses <br />Desarrollador Full Stack con React JS y NodeJS</p>
                <p>2 años <br />Desarrollador Front End y Diseñador de Interfaces</p>
                <p>2 años <br/>Creación de Webs para atraer tráfico orgánico mediante el SEO, posicionamiento en Google</p>
              </DetailsContainer>
              <DetailsContainer>
                <Icon src="/png/education.png" alt="Education-icon" />
                <h3>Educación</h3>
                <p>Técnico Superior en Desarrollo de Aplicaciones-Desarrollo de Videojuegos</p>
                <p>Bachillerato Tecnológico<br /></p>
              </DetailsContainer>
            </AboutContainers>
          </AboutDetailsContainer>
        </AboutContainers>
      </About>
      </>
    );
  };
export default Sobremi;