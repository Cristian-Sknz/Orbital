import React from 'react';

import './index.css';
import './theme/App.css';

import Navbar from './components/models/Navbar';
import Inicio from './components/sections/Inicio';
import Sobre from './components/sections/Sobre/';
import Equipe from './components/sections/Equipe';
import Servicos from './components/sections/Servicos';
import Projetos from './components/sections/Projetos';
import Galeria from './components/sections/Galeria';
import Contato from './components/sections/Contato';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Inicio />
      <Sobre />
      <Equipe />
      <Servicos />
      <Projetos />
      <Galeria />
      <Contato />
    </>
  );
};

export default App;
