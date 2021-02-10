import React from 'react';

import { Container, CapitalsList } from './styles';

const CardCapitals: React.FC = () => {
  return (
    <Container>
      <h2>Capitais</h2>
      <div>
        <span>Min</span>
        <span>Max</span>
      </div>
      <CapitalsList>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Rio de Janeiro</strong>
        </div>
      </CapitalsList>
    </Container>
  );
};

export default CardCapitals;
