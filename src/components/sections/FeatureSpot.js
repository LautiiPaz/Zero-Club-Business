// src/components/sections/FeatureSpot.js
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const Section = styled.section`
  padding: 100px 20px;
  background-color: ${theme.colors.background};
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr; // Una columna en celular
    gap: 50px;
  }
`;

const TextContent = styled.div`
  /* Si queremos cambiar el orden (texto derecha, imagen izquierda) en el futuro */
  order: 1; 
  
  @media (max-width: 960px) {
    order: 2; // En movil el texto va abajo de la imagen
    text-align: center;
  }
`;

const Label = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  display: block;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.textMain};
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textDark};
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 15px;
    color: ${theme.colors.textMain};
    display: flex;
    align-items: center;
    gap: 10px;

    /* El puntito verde antes de cada item */
    &::before {
      content: '▹'; 
      color: ${theme.colors.secondary};
      font-size: 1.2rem;
    }
  }

  @media (max-width: 960px) {
    display: inline-block; // Para centrar la lista en movil
    text-align: left;
  }
`;

// Simulación de una interfaz compleja (Dashboard)
const ImagePlaceholder = styled.div`
  order: 2;
  height: 400px;
  background: linear-gradient(135deg, #112240 0%, #0A192F 100%);
  border-radius: 12px;
  border: 1px solid rgba(100, 255, 218, 0.1); // Borde sutil verde
  position: relative;
  box-shadow: 0 20px 50px rgba(0,0,0,0.4);

  /* Elementos decorativos para que parezca una app */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.secondary};
    opacity: 0.5;
  }

  @media (max-width: 960px) {
    order: 1; // En movil la imagen va arriba
    height: 300px;
  }
`;

const FeatureSpot = () => {
  return (
    <Section>
      <Container>
        <TextContent>
          <Label>System Integration</Label>
          <Title>Built for the Modern CFO.</Title>
          <Description>
            Integrate seamlessly with your existing stack. Whether you use ERPs like SAP or simple spreadsheets, Zero Club adapts to your workflow, not the other way around.
          </Description>
          
          <FeatureList>
            <li>One-click export to PDF & Excel</li>
            <li>Real-time bank synchronization</li>
            <li>Multi-currency support (USD, EUR, GBP)</li>
          </FeatureList>
        </TextContent>

        <ImagePlaceholder />
      </Container>
    </Section>
  );
};

export default FeatureSpot;