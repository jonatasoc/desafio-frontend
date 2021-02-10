import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding: 12px;
    border-radius: 5px;
    border: none;
    flex: 1;
    width: 100%;
  }

  svg {
    margin-left: -2rem;
    color: #000;
    font-size: 1.7rem;
  }
`;

export default Container;
