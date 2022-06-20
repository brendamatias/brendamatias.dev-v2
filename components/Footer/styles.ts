import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.tertiary};

    > div {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      font-size: 0.8rem;
      color: #fff;

      > ul {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      @media (max-width: 470px) {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `};
`;
