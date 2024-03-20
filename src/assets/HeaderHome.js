import styled from "styled-components";

const ContenedorBotones = styled.div`
  position: absolute;
  top: 14px;
  right: 150px;
  display: flex;
  justify-content: right;
  padding: 5px 0px;
`;

const Navbar = styled.div`
  justify-content: center;
  height: 6.85rem;
  align-items: center;
  display: flex;
  z-index: 10;
  position: fixed;
  width: 100%;
  background-color: #212121;
  transition: background-color 0.5s ease-in-out;

  &.navbar-scroll {
    background-color: black;
    border-bottom: 1px solid #8d8d8d;
  }

  ul {
    z-index: 0;
    margin: auto;
    width: 100%;
    height: 40px;
    padding: 0px;
    list-style: none;
  }

  nav {
    position: fixed;
    filter: drop-shadow(1px 5px 3px hsl(220deg 0% 0% / 0.3))
      drop-shadow(2px 5px 6px hsl(220deg 0% 0% / 0.3))
      drop-shadow(4px 5px 12px hsl(220deg 0% 0% / 0.3));
  }

  nav > ul > li {
    padding: 10px 0px;
    margin: 0 25px;
    float: left;
  }

  ul > li a {
    font-size : 20px;
    color: #fff;
    text-decoration: none;
  }

  ul > li a:hover {
    opacity: 80%;
  }

  .hamb {
    display: none;
  }

  .side-menu {
    display: none;
  }

  @media screen and (max-width: 800px) {
    & > nav ul li a {
      display: none;
    }

    nav {
      margin: 0;
      position: fixed;
      background: black;
      box-shadow: none;
      overflow: hidden;
      max-height: 0;
      display: block;
      height: 100%;
      width: 100%;
      z-index: 1;
      transition: max-height 0.5s ease-out, background 1s ease-out,
        padding 0.5s ease-out;
    }

    .hamb {
      cursor: pointer;
      float: right;
      left: 24px;
      top: 30px;
      padding: 15px 0px;
      position: fixed;
      z-index: 10;
      display: block;
    }

    .hamb-line {
      background: white;
      display: block;
      height: 2px;
      position: relative;
      width: 30px;
    }

    .hamb-line::before,
    .hamb-line::after {
      display: block;
      content: "";
      background: white;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }

    .hamb-line::before {
      top: 8px;
    }

    .hamb-line::after {
      top: -8px;
    }

    .side-menu {
      display: none;
    }

    .side-menu:checked {
      margin: 0;
      height: 100%;
      overflow: visible;
    }

    .side-menu:checked ~ nav {
      max-height: 100%;
      padding: 100vh 0px;
      background: rgb(37, 37, 37);
    }

    .side-menu:checked ~ nav ul li a {
      margin: 20px 0;
      padding-top: 30px;
      padding-right: 50vw;
      display: block;
    }

    .side-menu:checked ~ nav ul li {
      float: left;
    }

    .side-menu:checked ~ .hamb .hamb-line {
      background: transparent;
    }

    .side-menu:checked ~ .hamb .hamb-line::before {
      transform: rotate(-45deg);
      top: 0;
    }

    .side-menu:checked ~ .hamb .hamb-line::after {
      transform: rotate(45deg);
      top: 0;
    }
  }
`;

const Logo = styled.div`
  background-image: url("/png/LogosVSIgranateVerde.png");
  position: fixed;
  width: 10rem;
  height: 6.25rem;
  margin-top: 0.5rem;
  margin-left: 20px;
  top: 0;
  left: 0;
  background-size: 140pt;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 10;

  @media only screen and (max-width: 800px) {
  }
`;

export {Navbar, Logo, ContenedorBotones }