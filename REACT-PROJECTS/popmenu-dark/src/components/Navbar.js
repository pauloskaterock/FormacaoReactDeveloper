// components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.8rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <NavbarContainer>
      <Logo>PopMenuDark</Logo>
      
      <NavLinks>
        <a href="#features">Recursos</a>
        <a href="#solutions">Soluções</a>
        <a href="#pricing">Preços</a>
        <a href="#demo">Demonstração</a>
        <FaSearch style={{ cursor: 'pointer' }} />
      </NavLinks>

      <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </MobileMenuButton>
    </NavbarContainer>
  );
};

export default Navbar;