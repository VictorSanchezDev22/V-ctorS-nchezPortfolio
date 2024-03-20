import React from 'react';

import '../App.css';

import { HeaderHome } from '../components/HeaderHome.jsx';
import HomeContent from '../components/HomeContent.jsx';
import {MainContent} from '../assets/HomeContent.js';

// import Footer from '../components/Footer.jsx';

const HomePage = () => {
    return(
        <MainContent>
            <HeaderHome>

            </HeaderHome>
            <HomeContent/>

        </MainContent>
    );
}
export default HomePage;