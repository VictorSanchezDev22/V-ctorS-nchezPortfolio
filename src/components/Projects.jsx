import React from 'react';

import '../App.css';
// import { HeaderHome } from '../components/HeaderHome.jsx';
import {BoxContainerWrapper,BoxContainer,BoxImage,BoxDescription} from '../scrollable-assets/ProjectsPageStyle.js';
// import Footer from '../components/Footer.jsx';
import {Title } from '../scrollable-assets/ExperienciaStyle.js';

const ProjectsPage = () => {
    return(
        <>
        <section id="proyectos" >
            {/* <HeaderHome/> */}
            {/* <HeaderHome> */}
            {/* <FlexContainer>
                <Link to="/">
                    <StyledImage src="/png/home.png" />
                </Link>
                <SloganPhrase>Proyectos</SloganPhrase>
            </FlexContainer> */}
            <Title>Proyectos</Title>
            <BoxContainerWrapper>
                <BoxContainer>
                    <a href="https://www.finlooker.com/" target="_blank" rel="noopener noreferrer" className="no-underline">
                    <BoxImage  src="/png/finlookerPhoto.png" alt="Creative Content" />
                    <BoxDescription>He trabajado en el Proyecto de Aplicación Web Finlooker como desarrollador FullStack, en las secciones del Login/Create Account,SideBar,Footer,
                        Profile Settings, etc.</BoxDescription>
                    </a>
                </BoxContainer>
                <BoxContainer>
                    <a href="https://vocoinfo.com/" target="_blank" rel="noopener noreferrer" className="no-underline">
                    <BoxImage  src="/png/vocoinfoFoto.png" alt="Creative Content"/>
                    <BoxDescription>Creación y desarrollo de un Formulario Web para Voco, para facilitar la inscripción a los cursos de la Expodental 2024. Conecté este formulario
                        con una hoja de Excel, en el que quedó reflejado el listado de inscripciones.</BoxDescription>
                    </a>
                </BoxContainer>
                <BoxContainer>
                    <a href="https://victorsanchezdev.tech/png/SEO2018-2020_filosofiaEZ.png" target="_blank" rel="noopener noreferrer" className="no-underline"> 
                    <BoxImage  src="/png/SEO2018-2020_filosofiaEZ.png" alt="Creative Content" />
                    <BoxDescription>Diseño y Posicionamiento de una web con SEO, llegó a tener más de 30.000 visitas ,actualmente no tengo el dominio
                        pero se pueden ver los graficos de Google Analytics. </BoxDescription>
                    </a>
                </BoxContainer>
            </BoxContainerWrapper>
            {/* </HeaderHome> */}

        </section>
        </>
    );
}

export default ProjectsPage;

