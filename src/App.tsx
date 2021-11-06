import React from 'react';

import './index.css';
import './theme/App.css';

import Inicio from './components/sections/Inicio';
import Navbar from './components/models/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Inicio />
    </>
  );
};

export default App;
