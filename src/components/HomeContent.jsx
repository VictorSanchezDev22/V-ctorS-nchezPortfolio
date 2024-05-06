import React from 'react';
import {MainContent,
    SloganContainer,
    SloganPhrase,
    Descripcion,
    CircleImage,
    ContentButtons
} from "../assets/HomeContent";

import { Link } from 'react-router-dom';
import Footer from './Footer';

const HomeContent = () => {

    const handleCVDownload = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const cvURL = '/cv';
    
        if (isMobile) {
          window.location.href = cvURL;
        } else {
          window.open(cvURL, '_blank');
        }
      };

    return(
        <MainContent >
            <SloganContainer className="App">
                <SloganPhrase >
                Víctor Sánchez
                </SloganPhrase>
                <Descripcion>
                Desarrollador Front-end especializado en React (Programador Web)
                </Descripcion>
                <CircleImage src="/png/FOTO_formal2023.png"/>
                <Link to="/projects">
                    <ContentButtons>Proyectos</ContentButtons>
                </Link >
                <Link to="/contacto">
                    <ContentButtons>Contacto</ContentButtons>
                </Link>
                <ContentButtons onClick={handleCVDownload}>CV</ContentButtons>
            </SloganContainer>
            <Footer/>  
        </MainContent>
    );
}
export default HomeContent;
