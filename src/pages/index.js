// src/pages/index.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import SocialProof from "../components/sections/SocialProof";
import ValueProps from "../components/sections/ValueProps";   
import FeatureSpot from "../components/sections/FeatureSpot";
import CTA from "../components/sections/CTA";    // <--- NUEVO
import Footer from "../components/layout/Footer";
import { theme } from "../theme/theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
    /* ESTO ES NUEVO: */
    /* Le decimos al navegador: "Cuando bajes, deja 100px de aire arriba" */
    scroll-padding-top: 100px; 
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.textMain};
  }
`;

const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <title>Zero Club Business</title>
      
      <Navbar />
      <Hero />
      <SocialProof /> {/* <--- Barra de logos */}
      <ValueProps />  {/* <--- Tarjetas de beneficios */}
      <FeatureSpot /> {/* Sección de Integración / Destaque */}
      <CTA />     {/* Llamada final a la acción */}
      <Footer />  {/* Pie de página */}
    </main>
  );
};

export default IndexPage;