import React from "react";

import { CustomFooter, Container, Row, Col, ImageWrapper, TextWrapper, CopyRights} from "../assets/Footer"; 

const Footer = () => {

  return (
    <CustomFooter >
      <Container >
        <Row>
            <ImageWrapper>
              <img src="png/LogosVSIgranateVerde.png" alt="logo light" height="10" />
            </ImageWrapper>
          <Col $lg={3}>
          
            <TextWrapper>
              <h2>Soy Web Developer y crearé tu propia web</h2>
              <h4>
              <br/>
                Conctactame por mail o por mi número de telefono para disfrutar de mis servicios ! 
              </h4>
            </TextWrapper>
          </Col>
          <Col $lg={10} $lg-offset={1}>
            <Row>
              <Col $lg={4}>
                victorsanchezin22@gmail.com
              </Col>
              <Col $lg={4}>
                669392296
              </Col>
              {/* <CompanyCol $lg={4}>
                <h2>Company</h2>
                <div className="text-muted mt-3">
                  <ul className="list-unstyled ff-secondary footer-list">
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                    <li>
                      <a href="/privacypolicies">Privacy Policies</a>
                    </li>
                    <li>
                      <a href="/cookiepolicies">Cookie Policies</a>
                    </li>
                    <li>
                      <a href="/termsandconditions">Terms and Conditions</a>    
                    </li>
                  </ul>
                </div>
              </CompanyCol> */}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col $lg={3}>
            <CopyRights>© 2024 VSI WEB3 Solutions </CopyRights>
          </Col>
        </Row>
      </Container>
    </CustomFooter>
  );
};
export default Footer;