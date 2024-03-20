import React from 'react';
import styled from 'styled-components';

import '../App.css';
import { HeaderHome } from '../components/HeaderHome.jsx';

const WebLenguagesLogo = styled.div `
    background-image: url("/png/webLenguages.png");
    position: fixed;
    margin-top: 20%;
    margin-left: 50%;
    width: 50rem;
    height: 50rem;
    background-repeat: no-repeat;

    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

const ReactLogo = styled.div `
    background-image: url("/logo512.png");
    position: fixed;
    margin-top: 15%;
    margin-left: 15%;
    width: 32rem;
    height: 30rem;

    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

const HomePage = () => {
    return(
        <>
        <HeaderHome></HeaderHome>
        <ReactLogo/>
        <WebLenguagesLogo/>
        </>
    );
}
export default HomePage;