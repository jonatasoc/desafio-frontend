import React from 'react';
import { MdSearch } from 'react-icons/md';

import Container from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <input placeholder="Insira aqui o nome da cidade" type="text" />
      <MdSearch />
    </Container>
  );
};

export default SearchBar;
