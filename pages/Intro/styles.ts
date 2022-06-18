import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: calc(100vh - 198px);
  color: #222222;

  > div {
    padding: 1.5rem 2rem;

    > h1 {
      font-size: 3rem;
      margin: 0;
      padding: 0;
    }

    > p {
      max-width: 25rem;
      text-align: justify;
      margin-bottom: 2rem;
    }
  }
`;
