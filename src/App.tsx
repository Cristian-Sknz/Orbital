import React from 'react';

import './index.css';
import './theme/App.css';

import Navbar from './components/models/Navbar';
import Inicio from './components/sections/Inicio';
import Sobre from './components/sections/Sobre/';
import Projetos from './components/sections/Projetos';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Inicio />
      <Sobre />
      <Projetos />
    </>
  );
};

export default App;
