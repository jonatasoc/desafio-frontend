import React, { useEffect } from 'react';
import CardCapitals from '../CardCapitals';
import SearchBar from '../SearchBar';

import { Container, Title } from './styles';

import request from '../../services/api';

const Home: React.FC = () => {
  // const [capitals, setCapitals] = useState([]);
  // const [specificCity, setSpecificCity] = useState(null);

  const defaultCapitals = [
    'Rio de Janeiro',
    'São Paulo',
    'Belo Horizonte',
    'Brasília',
    'Belém',
    'Salvador',
    'Curitiba',
    'Fortaleza',
    'Manaus',
    'João Pessoa',
  ];

  useEffect(() => {
    async function fetchData() {
      const capitalsData = defaultCapitals.map(capital => {
        const capitalParsed = encodeURIComponent(capital);
        const response = request.get(
          `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${capitalParsed}&format=json&u=c`,
          '',
          '',
          (err, data) => {
            if (err) {
              console.log(err);
            }
            return data;
          },
        );
        return response;
      });

      return capitalsData;
    }

    console.log(fetchData());
  }, []);

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
