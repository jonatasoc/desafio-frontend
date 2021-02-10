import React from 'react';
import Home from './components/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
