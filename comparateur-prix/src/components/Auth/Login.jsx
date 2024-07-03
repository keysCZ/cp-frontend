import React from 'react';
import styled from 'styled-components';

const CLCV = () => {
  return (
    <Container>
      <Logo>
        <LogoImage src="logo.png" alt="CLCV" />
      </Logo>
      <LoginForm>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Entrez votre adresse email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mot de passe</Label>
          <Input type="password" id="password" placeholder="Entrez votre mot de passe" />
        </FormGroup>
        <Button type="submit">Se connecter</Button>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  color: #333;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #EB8809;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
`;

const Links = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Link = styled.a`
  color: #333;
  text-decoration: none;
`;

export default CLCV;
