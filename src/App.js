import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Empreendimentos from './components/Empreendimentos';
import Premios from './components/Premios';
import ShowDecorados from './components/ShowDecorados';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Highlights />
      <Empreendimentos />
      <Premios />
      <ShowDecorados />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;