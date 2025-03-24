// components/Features.js
import React from 'react';
import styled from 'styled-components';
import { FiSmartphone, FiDollarSign, FiBarChart2 } from 'react-icons/fi';

const FeaturesContainer = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 5rem 10%;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.headings};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const Features = () => {
  const features = [
    {
      icon: <FiSmartphone />,
      title: "Cardápio Digital",
      description: "Um cardápio digital elegante que funciona em qualquer dispositivo."
    },
    {
      icon: <FiDollarSign />,
      title: "Aumente as Vendas",
      description: "Sistema integrado de pedidos online para aumentar seu faturamento."
    },
    {
      icon: <FiBarChart2 />,
      title: "Marketing Inteligente",
      description: "Ferramentas para fidelizar clientes e impulsionar seu negócio."
    }
  ];

  return (
    <FeaturesContainer id="features">
      <SectionTitle>Nossos Recursos</SectionTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features;