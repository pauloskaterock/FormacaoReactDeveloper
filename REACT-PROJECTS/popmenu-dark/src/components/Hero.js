// components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.cardBg} 100%
  );
  padding: 5rem 10%;
  display: flex;
  align-items: center;
  min-height: 80vh;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(187, 134, 252, 0.3);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Transforme a experiência digital do seu restaurante</HeroTitle>
        <HeroSubtitle>
          O PopMenuDark oferece a plataforma mais completa para cardápios digitais,
          pedidos online e marketing para restaurantes - tudo em um tema escuro elegante.
        </HeroSubtitle>
        <CTAButton>Solicitar Demonstração</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;