// src/components/sections/SocialProof.js
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const SocialSection = styled.section`
  padding: 40px 20px;
  background-color: ${theme.colors.primary}; // Mismo azul para continuidad
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
`;

const Title = styled.p`
  color: ${theme.colors.textDark};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 25px;
  opacity: 0.8;
`;

const LogosGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  opacity: 0.5; // Los logos un poco apagados para no robar atención
  
  /* Esto simula logos de texto por ahora */
  span {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${theme.colors.textMain};
    font-family: sans-serif;
    letter-spacing: -1px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    span { font-size: 1.2rem; }
  }
`;

const SocialProof = () => {
  return (
    <SocialSection>
      <Title>Trusted by forward-thinking finance teams</Title>
      <LogosGrid>
        {/* Usamos nombres ficticios estilo Startup */}
        <span>ORION</span>
        <span>MERCURY</span>
        <span>VELOCITY</span>
        <span>NEXUS</span>
        <span>STRATOS</span>
      </LogosGrid>
    </SocialSection>
  );
};

export default SocialProof;