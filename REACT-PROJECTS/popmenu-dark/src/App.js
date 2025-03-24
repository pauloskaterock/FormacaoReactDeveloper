// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { darkTheme } from './styles/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
      {/* Adicionar outros componentes aqui */}
    </ThemeProvider>
  );
}

export default App;