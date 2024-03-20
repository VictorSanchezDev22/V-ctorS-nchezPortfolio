import React from 'react';
import styled from 'styled-components';

import '../App.css';
import { HeaderHome } from '../components/HeaderHome.jsx';

const GameDev = styled.div `
    background-image: url("/png/gameDev.png");
    position: fixed;
    margin-top: 20%;
    margin-left: 35%;
    align : center;
    anchor: center;
    width: 50rem;
    height: 50rem;
    background-repeat: no-repeat;

    @media only screen and (max-width: 800px) {
        display: none;
    }
`;
const HomePage = () => {
    return(
        <>
        <HeaderHome></HeaderHome>
        <GameDev></GameDev>
        </>
    );
}
export default HomePage;