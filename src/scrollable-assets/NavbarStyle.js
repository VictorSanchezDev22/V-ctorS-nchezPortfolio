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


export {Body,Nav,NavLinks,Logo,HamburgerNav,HamburgerMenu,
    HamburgerIcon,MenuLinks}