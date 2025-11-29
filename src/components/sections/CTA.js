// src/components/sections/CTA.js
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const Wrapper = styled.section`
  padding: 120px 20px;
  background: linear-gradient(180deg, ${theme.colors.background} 0%, #112240 100%);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.textMain};
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  color: ${theme.colors.textDark};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 40px auto;
`;

const Button = styled.button`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.background}; /* Texto oscuro sobre fondo verde */
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05); /* Se agranda un poquito */
  }
`;

const CTA = () => {
  return (
    <Wrapper>
      <Title>Ready to upgrade your financial stack?</Title>
      <Subtitle>
        Join 500+ forward-thinking companies controlling their spend with Zero Club.
      </Subtitle>
      <Button>Get Started Free</Button>
    </Wrapper>
  );
};

export default CTA;