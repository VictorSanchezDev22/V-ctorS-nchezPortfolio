import styled from "styled-components";

const CustomFooter = styled.div`
  background-color: #0e0e0e;
  position: relative;
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 2rem;
  border-top: 1px solid #8d8d8d;
`;

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;

const Row = styled.div`
  color: white;

  display: flex;
  flex-wrap: wrap;
  margin: -20px;
`;

const Col = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 12px;
  margin-left: 2rem; 
  @media (min-width: 768px) {
    width: ${(props) => (props.$lg ? `${(props.$lg / 12) * 100}%` : "100%")};
  }
`;

const CompanyCol = styled(Col)`

  li {
    font-family: 'Cutive Mono', monospace;
    margin-top: 0.5rem; 
  }

  a {
    color : white; 
    font-family: 'Verdana', 'Arial', sans-serif;
    font-size: 16px; 
  }
  
  @media (max-width: 768px) {
    margin-left: 1rem;
    max-width: 30%; 
  }
`;

const ImageWrapper = styled.div`
  img {
    margin-left: 1.7rem;
    max-width: 15%;  
    min-width: 150px;  // Ancho mínimo en píxeles, para que no se reduzca tanto en mobile
    height: auto;  // Altura auto para mantener la proporción de la imagen
    width: auto;  // Ancho auto para mantener la proporción de la imagen

    @media (max-width: 768px) {
      margin-left: 2rem;
      max-width: 30%; 
    }
  }
`;

const TextWrapper = styled.div`
  color: white;
  margin-left: 1rem;
  font-size: 15px;
  @media (max-width: 768px) {
      max-width: 80%; 
  }
`;

const CopyRights = styled.p`
  color: white;
  font-size: 18px;
  margin-left: 1rem;
  @media (max-width: 768px) {
    max-width: 70%;
    font-size: 15px;
}
`;

export { CustomFooter, Container, Row, Col, CompanyCol, ImageWrapper, TextWrapper, CopyRights};   