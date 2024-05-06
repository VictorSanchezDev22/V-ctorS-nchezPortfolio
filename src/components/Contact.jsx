import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../App.css';
// import { HeaderHome } from '../components/HeaderHome.jsx';
// import Footer from '../components/Footer.jsx';

import {Section,Cajon, Form,Label,Input, TextArea, SubmitButton,StyledParagraph } from '../scrollable-assets/ContactStyle.js';
import {Title } from '../scrollable-assets/ExperienciaStyle.js';

const Contacto = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false); // Estado para controlar si se ha enviado el correo electrónico con éxito

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7u6px0t', 'template_cvgbfra', form.current, {
        publicKey: 'oLyP6tWbWTdWexgqk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true); // Establecer el estado de correo electrónico enviado como verdadero
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <Section id="contacto">
      {/* <FlexContainer>
        <Link to="/">
          <StyledImage src="/png/home.png" />
        </Link>
        <SloganPhrase>Contacto</SloganPhrase>
      </FlexContainer> */}
      <Title>Contacto</Title>
      <Cajon>
      {emailSent ? ( // Si el correo electrónico se ha enviado con éxito, mostrar el mensaje
      <StyledParagraph>¡Correo electrónico enviado!</StyledParagraph>
      ) : ( // Si el correo electrónico no se ha enviado, mostrar el formulario
        <Form ref={form} onSubmit={sendEmail}>
          <Label>Nombre</Label>
          <Input type="text" name="user_name" />
          <Label>Email</Label>
          <Input type="email" name="user_email" />
          <Label>Mensaje</Label>
          <TextArea name="message" />
          <SubmitButton type="submit" value="Send" />
        </Form>
      )}
      </Cajon>
    </Section>
  );
};

export default Contacto;