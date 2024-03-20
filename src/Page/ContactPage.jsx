import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../App.css';
import { HeaderHome } from '../components/HeaderHome.jsx';
import {MainContent,SloganPhrase, Form,Label,Input, TextArea, SubmitButton } from '../assets/ContactStyle.js';
// import Footer from '../components/Footer.jsx';

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7u6px0t', 'template_cvgbfra', form.current, {
        publicKey: 'oLyP6tWbWTdWexgqk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
        <MainContent >
            <HeaderHome/>
            {/* <HeaderHome> */}
            <SloganPhrase>Contacto</SloganPhrase>
            <Form ref={form} onSubmit={sendEmail}>
                <Label>Name</Label>
                <Input type="text" name="user_name" />
                <Label>Email</Label>
                <Input type="email" name="user_email" />
                <Label>Message</Label>
                <TextArea name="message" />
                <Input type="submit" value="Send" />
            </Form>
            {/* </HeaderHome> */}

        </MainContent>
    );
}

export default Contacto;
