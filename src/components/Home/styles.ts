import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 80px auto 0px;
  width: 50%;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 4px;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 2rem;
    padding: 0px 8px;
  }
`;
