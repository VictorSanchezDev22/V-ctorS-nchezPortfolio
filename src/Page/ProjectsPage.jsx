import React from 'react';

import '../App.css';
import { HeaderHome } from '../components/HeaderHome.jsx';
import {MainContent,BoxContainerWrapper,BoxContainer,BoxImage,BoxDescription, SloganPhrase } from '../assets/ProjectsPageStyle.js';
// import Footer from '../components/Footer.jsx';

const ProjectsPage = () => {
    return(
        <MainContent >
            <HeaderHome/>
            {/* <HeaderHome> */}
            <SloganPhrase>Proyectos</SloganPhrase>
            <BoxContainerWrapper>
                <BoxContainer>
                    <a href="https://www.finlooker.com/" target="_blank" rel="noopener noreferrer" className="no-underline">
                    <BoxImage  src="/png/finlookerPhoto.png" alt="Creative Content" />
                    <BoxDescription>Trabajé en el Proyecto de Aplicación Web Finlooker como desarrollador FullStack, en las secciones del Login/Create Account,SideBar,Footer,
                        Profile Settings,etc.</BoxDescription>
                    </a>
                </BoxContainer>
                <BoxContainer>
                    <a href="https://vocoinfo.com/" target="_blank" rel="noopener noreferrer" className="no-underline">
                    <BoxImage  src="/png/vocoinfoFoto.png" alt="Creative Content" />
                    <BoxDescription>Desarrollé un Formulario Web para Voco, que tenía que hacer una incripción para unos cursos. Entonces conecté este formulario
                        con una hoja de Excel</BoxDescription>
                    </a>
                </BoxContainer>
                <BoxContainer>
                    <a href="https://victorsanchezdev.tech/png/SEO2018-2020_filosofiaEZ.png" target="_blank" rel="noopener noreferrer" className="no-underline"> 
                    <BoxImage  src="/png/SEO2018-2020_filosofiaEZ.png" alt="Creative Content" />
                    <BoxDescription>Hice un proyecto personal enfocado en posicionar una web con el SEO que llegó a tener más de 30.000 visitas,actualmente no tengo el dominio
                        pero se pueden ver los graficos de Google Analytics </BoxDescription>
                    </a>
                </BoxContainer>
            </BoxContainerWrapper>
            {/* </HeaderHome> */}

        </MainContent>
    );
}

export default ProjectsPage;

