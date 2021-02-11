import React from 'react';

import { Container, InfoHeader, CapitalsList } from './styles';

const CardCapitals: React.FC = () => {
  return (
    <Container>
      <h2>Capitais</h2>
      <InfoHeader>
        <div>
          <span>Min</span>
          <span>Max</span>
        </div>
        <div>
          <span>Min</span>
          <span>Max</span>
        </div>
      </InfoHeader>
      <CapitalsList>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Rio de Janeiro</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>São Paulo</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Belo Horizonte</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Brasília</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Belém</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Salvador</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Curitiba</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Fortaleza</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>Manaus</strong>
        </div>
        <div>
          <span>18°</span>
          <span>27°</span>
          <strong>João Pessoa</strong>
        </div>
      </CapitalsList>
    </Container>
  );
};

export default CardCapitals;
