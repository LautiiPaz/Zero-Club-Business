// src/components/sections/Hero.js
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const HeroSection = styled.section`
  background-color: ${theme.colors.background};
  min-height: 90vh; // Ocupa casi toda la altura de la pantalla
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;

  /* Un degradado sutil de fondo para que no se vea plano */
  background: linear-gradient(
    135deg, 
    ${theme.colors.background} 0%, 
    #0d2538 100%
  );
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr; // Divide la pantalla en 2 columnas iguales
  gap: 60px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr; // En tablets/celulares, una sola columna
    text-align: center;
    gap: 40px;
  }
`;

const TextContent = styled.div`
  max-width: 600px;

  @media (max-width: 960px) {
    margin: 0 auto; // Centrar en móvil
  }
`;

const PreTitle = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${theme.colors.textMain};
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem; // Letra más chica en celular
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textDark};
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 960px) {
    justify-content: center; // Centrar botones en móvil
  }
`;

const PrimaryButton = styled.a`
  background-color: transparent;
  border: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.secondary};
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none; /* <--- IMPORTANTE para que no salga subrayado */
  display: inline-block; /* <--- IMPORTANTE para que respete el padding */

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: ${theme.colors.textMain};
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    text-decoration-color: ${theme.colors.secondary}; // Subrayado verde al pasar mouse
  }
`;

// Esto simula la imagen de la app por ahora (un cuadrado abstracto tecnológico)
const VisualPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  
  /* Decoración simulada */
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <TextContent>
          <PreTitle>Zero Club Business</PreTitle>
          <Title>Financial Clarity for Growing Enterprises.</Title>
          <Subtitle>
            Centralize expenses, corporate cards, and real-time reporting in one secure platform. 
            Stop guessing and start taking control.
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton href="mailto:lautaroapaz@gmail.com?subject=Interesado%20en%20Demo%20Zero%20Club">
            Book a Demo
            </PrimaryButton>

            <SecondaryButton>Watch Video</SecondaryButton>
          </ButtonGroup>
        </TextContent>

        <VisualPlaceholder />
      </Container>
    </HeroSection>
  );
};

export default Hero;