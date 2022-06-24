import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    background: linear-gradient(
      90deg,
      ${theme.colors.background.primary} 70%,
      ${theme.colors.background.primary_light} 40%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;

    @media (max-width: 900px) {
      background: linear-gradient(
        -45deg,
        ${theme.colors.background.primary_light} 30%,
        ${theme.colors.background.primary} 60%
      );
    }

    .image {
      width: 800px;
      height: 100%;
      position: absolute;
      bottom: 0;
      right: 1%;

      > div {
        width: 100%;
        height: 100%;
        position: relative;
      }

      @media (max-width: 480px) {
        width: 100%;
        height: 40%;
        right: 0;
      }
    }
  `}
`;

export const Content = styled.div`
  ${() => css`
    z-index: 999;
    margin: 0 auto;
    width: 100%;
    max-width: 1100px;
    padding: 2rem;
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    > span {
      display: inline-block;
      text-transform: uppercase;
      margin-bottom: 2rem;
      font-size: 0.875rem;
      font-weight: 500;
      position: relative;
      color: ${theme.colors.text};

      &:after {
        display: block;
        content: '';
        width: 3rem;
        height: 2px;
        background: ${theme.colors.primary};
        color: ${theme.colors.primary};
        position: absolute;
        bottom: -10px;
      }
    }

    > h1 {
      color: ${theme.colors.text};
    }

    > h2 {
      color: ${theme.colors.primary};
    }

    a {
      display: inline-block;
      color: ${theme.colors.text};
    }

    .button {
      color: #fff;
    }

    > div {
      margin-top: 5rem;
      margin-bottom: 2rem;

      @media (max-width: 480px) {
        margin-top: 2rem;
        margin-bottom: 1rem;
      }

      > a {
        display: inline-block;
        align-items: center;
        gap: 6px;
        margin-bottom: 0.5rem;

        &:hover {
          color: ${theme.colors.primary};
        }
      }

      > ul {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 4rem;

        > li {
          cursor: pointer;

          a:hover {
            color: ${theme.colors.primary};
          }
        }
      }
    }
  `}
`;
