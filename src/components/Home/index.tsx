import React from 'react';
import SearchBar from '../SearchBar';

import { Container, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Previsão do tempo</Title>
      <SearchBar />
    </Container>
  );
};

export default Home;
