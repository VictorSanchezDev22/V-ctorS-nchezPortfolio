import React from 'react';
import { HeaderHome } from '../components/HeaderHome.jsx';
import styled from 'styled-components';

const CVContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CV = styled.object`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
        width:50%;
        height:50%; 
      }
`;

const CurriculumPage = () => {
    return(
        <>
            <HeaderHome/>
            <CVContainer>
                <CV data={require('../assets/CV2024-Víctorsánchez.pdf')} type="application/pdf"></CV>
            </CVContainer>
        </>
    );
}

export default CurriculumPage;