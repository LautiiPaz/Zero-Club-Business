// src/components/layout/Footer.js
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const FooterContainer = styled.footer`
  background-color: #020c1b; /* El color más oscuro posible */
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Copyright = styled.p`
  color: ${theme.colors.textDark};
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  a {
    color: ${theme.colors.textDark};
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} Zero Club Business. All rights reserved.
      </Copyright>
      <Links>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Support</a>
      </Links>
    </FooterContainer>
  );
};

export default Footer;