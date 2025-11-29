// src/components/sections/ValueProps.js
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const Section = styled.section`
  padding: 100px 20px;
  background-color: ${theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 columnas
  gap: 30px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr; // 1 columna en móvil
  }
`;

const Card = styled.div`
  background-color: #112240; // Un azul un pelín más claro que el fondo
  padding: 40px 30px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-10px); // Efecto de flotar al pasar el mouse
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  color: ${theme.colors.secondary};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.h3`
  color: ${theme.colors.textMain};
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

const CardText = styled.p`
  color: ${theme.colors.textDark};
  font-size: 1rem;
  line-height: 1.6;
`;

const ValueProps = () => {
  return (
    <Section id="features">
      <Container>
        <Grid>
          {/* Card 1 */}
          <Card>
            <IconWrapper>
              {/* Icono simple SVG inline */}
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </IconWrapper>
            <CardTitle>Automated Reconciliation</CardTitle>
            <CardText>
              Save 20+ hours per month by syncing transactions directly with your bank ledgers. No more manual entry.
            </CardText>
          </Card>

          {/* Card 2 */}
          <Card>
            <IconWrapper>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </IconWrapper>
            <CardTitle>Smart Spend Limits</CardTitle>
            <CardText>
              Issue virtual cards with pre-set limits. Prevent overspending before it happens with granular controls.
            </CardText>
          </Card>

          {/* Card 3 */}
          <Card>
            <IconWrapper>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </IconWrapper>
            <CardTitle>Real-Time Analytics</CardTitle>
            <CardText>
              Make decisions based on live data, not last month's PDF reports. Full visibility on your cash flow.
            </CardText>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
};

export default ValueProps;