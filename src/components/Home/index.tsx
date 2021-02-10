import React from 'react';
import CardCapitals from '../CardCapitals';
import SearchBar from '../SearchBar';

import { Container, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Previsão do tempo</Title>
      <SearchBar />
      <hr />
      <CardCapitals />
    </Container>
  );
};

export default Home;
