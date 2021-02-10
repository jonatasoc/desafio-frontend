import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;

  h2 {
    margin-bottom: 10px;
  }

  div:first-child {
    span + span {
      margin-left: 5px;
    }
  }
`;

export const CapitalsList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;

  div {
    color: #000;
  }
  div:not(:first-child) {
    margin-top: 20px;
  }

  div:first-child,
  div:nth-child(6) {
    margin-top: 10px;
  }

  @media (max-width: 576px) {
    flex-wrap: nowrap;
  }
`;
