import React from 'react';

import {Body,Nav,NavLinks,Logo,HamburgerNav,HamburgerMenu,HamburgerIcon,MenuLinks} from '../scrollable-assets/NavbarStyle';


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <Body>
        { /* DESKTOP NAV */ }
          <Nav id="desktop-nav">
            <Logo>Víctor Sánchez</Logo>
            <NavLinks>
              <li><a href="#about">Sobre Mi</a></li>
              <li><a href="#experience">Experiencia</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
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
              <li><a href="#about" onClick={toggleMenu}>Sobre Mi</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experiencia</a></li>
              <li><a href="#proyectos" onClick={toggleMenu}>Proyectos</a></li>
              <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
            </MenuLinks>
          </HamburgerMenu>
        </HamburgerNav>
        </Body>
    </>
)
}; 

export default Navbar;