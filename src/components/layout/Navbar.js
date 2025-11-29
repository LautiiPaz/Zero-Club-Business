// src/components/layout/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme'; // Importamos los colores

const NavContainer = styled.nav`
  display: flex;
  justify_content: space-between; // Logo a un lado, items al otro
  align-items: center;
  padding: 0 40px;
  height: 80px;
  background-color: ${theme.colors.primary};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); // Sombra sutil elegante
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.white};
  cursor: pointer;
  
  span {
    color: ${theme.colors.secondary}; // El punto o detalle en verde
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none; // En celular lo ocultamos por ahora (haremos menú hamburguesa luego)
  }
`;

const LinkItem = styled.a`
  color: ${theme.colors.textMain};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const ButtonSmall = styled.button`
  background-color: transparent;
  border: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1); // Efecto sutil al pasar el mouse
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>Zero Club<span>.</span></Logo>
      
      <NavLinks>
        <LinkItem href="#features">Solutions</LinkItem>
        <LinkItem href="#pricing">Pricing</LinkItem>
        <LinkItem href="#about">Company</LinkItem>
        <ButtonSmall onClick={() => alert("Portal de clientes en construcción 🚧")}>
  Log In
</ButtonSmall>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;