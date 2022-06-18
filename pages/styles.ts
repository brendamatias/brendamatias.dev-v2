import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 1100px;
  margin: 0 auto 6rem auto;
  position: relative;

  > div {
    height: 100vh;
    color: #222222;

    > section {
      display: flex;
      align-items: center;
      padding: 1.5rem 2rem;
      width: 100%;
      height: 100%;
    }
  }
`;
