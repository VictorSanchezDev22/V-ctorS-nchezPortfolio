import React from 'react';

import {Section,SectionContainer,SectionPicContainer,
  SectionText,OrangeGradientP,Title,BtnContainer,Btn,SocialsContainer,Icon } from '../scrollable-assets/PresentacionStyles';

const Navbar = () => {
  const openPDFInNewTab = () => {
    const pdfUrl = require('../assets/CV2024-Víctorsánchez.pdf');
    window.open(pdfUrl);
  };
  // const handleCVDownload = () => {
  //   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  //   const cvURL = '/cv';

  //   if (isMobile) {
  //     window.location.href = cvURL;
  //   } else {
  //     window.open(cvURL, '_blank');
  //   }
  // };
    return (
      <>
        { /* SECTIONS */ }
        <Section id="profile">
          <SectionContainer className="section-container">
            <SectionPicContainer style={{marginTop: '9rem'}} className="section_pic-container">
              <img src="/png/FOTO_formal2023.png" alt="Víctor Sanchez Foto de Perfil" />
            </SectionPicContainer>
            <SectionText className="section_text">
              {/* <SectionTextP1 className="section_text_p1">Hola, soy</SectionTextP1> */}
              <Title className="title">Víctor Sánchez</Title>
              <OrangeGradientP className="section_text_p2">Desarrollador Front-end </OrangeGradientP>
              <BtnContainer className="btn-container">
                <Btn className="btn btn-color-2" onClick={openPDFInNewTab}>Descargar CV</Btn>
                <a href="#contacto"><Btn className="btn btn-color-2">Contáctame</Btn></a>
              </BtnContainer>
              <SocialsContainer id="socials-container">
                <a href="https://www.linkedin.com/in/victor-s%C3%A1nchez-i%C3%B1iguez-b0849a224/" target="_blank" rel="noopener noreferrer" >
                  <Icon src="/png/linkedin.png" alt="My Linkedin profile" className="icon" />
                </a>
                <a href="https://github.com/VictorSanchezDev22" target="_blank" rel="noopener noreferrer" >
                  <Icon src="/png/github-icon.png" alt="My GitHub profile" className="icon" />
                </a>
              </SocialsContainer>
            </SectionText>
          </SectionContainer>
        </Section>
    </>
)
}; 

export default Navbar;