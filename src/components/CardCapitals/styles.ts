import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;

  h2 {
    margin-bottom: 10px;
  }
`;

export const CapitalsList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;

  span {
    margin-right: 15px;
    text-align: left;
  }

  div {
    color: #000;
    margin-right: 55px;
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

export const InfoHeader = styled.div`
  display: flex;
  position: relative;

  div {
    display: flex;
  }

  div:nth-child(2) {
    position: absolute;
    left: 242px;

    @media (max-width: 576px) {
      display: none;
    }
  }

  color: #8b6020;
  span:not(:first-child) {
    margin-left: 10px;
  }
`;
