import React from 'react';

import {Title,Icon } from '../scrollable-assets/ExperienciaStyle.js';
import { AboutContainers, DetailsContainer} from '../scrollable-assets/ExperienciaStyle.js';

import {ExperienceContainer, ExperienceSubTitle, ExperienceDetailsContainer, ArticleContainer,
  Article,CenteredImage,GA }  from '../scrollable-assets/ExperienciaStyle.js';


const Experiencia = () => {
    
    return (
      <>
      {/*EXPERIENCE SECTION*/}
      <ExperienceContainer id ="experience">
        <Title>Experiencia</Title>
        <ExperienceDetailsContainer class="experience-details-container">
          <AboutContainers class="about-containers">
            <DetailsContainer class="details-containers">
              <ExperienceSubTitle >Front-end Development</ExperienceSubTitle>
              <ArticleContainer class="article-container">
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>HTML</h3>
                    <p>Intermedio</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>CSS</h3>
                    <p>Intermedio</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>JAVASCRIPT</h3>
                    <p>Intermedio</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>REACT JS</h3>
                    <p>Intermedio</p>
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
                    <p>Básico</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>Node JS</h3>
                    <p>Básico</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>Google Analytics</h3>
                    <p>Intermedio</p>
                  </div>
                </Article>
              </ArticleContainer>
            </DetailsContainer>
          </AboutContainers>
        </ExperienceDetailsContainer>
            <GA  src="/png/webLenguages.png" alt="Main Web Development Languages" />
            <GA  src="/png/GA.png" alt="Google Analytics" />
        <ExperienceDetailsContainer class="experience-details-container">
          <AboutContainers class="about-containers">
            <DetailsContainer class="details-containers">
              <ExperienceSubTitle> Game Development</ExperienceSubTitle>
              <ArticleContainer class="article-container">
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>Unity</h3>
                    <p>Intermedio</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>C#</h3>
                    <p>Intermedio</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>Blender</h3>
                    <p>Básico</p>
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
                    <p>Básico</p>
                  </div>
                </Article>
                <Article>
                  <Icon src="/png/checkmark.png" alt="icono de experiencia" class="icon"/>
                  <div>
                    <h3>Node JS</h3>
                    <p>Básico</p>
                  </div>
                </Article>
              </ArticleContainer>
            </DetailsContainer>
          </AboutContainers>
        </ExperienceDetailsContainer>
        <CenteredImage  src="/png/gameDev.png" alt="Main Web Development Languages" />
      </ExperienceContainer>
      </>
    );
  };
export default Experiencia;