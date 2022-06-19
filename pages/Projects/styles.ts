import styled, { css } from 'styled-components';

export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;

  > div {
    display: flex;
    gap: 4rem;
    padding: 5rem 2rem;

    img {
      border-radius: 0.875rem;
    }
  }
`;

export const Info = styled.div`
  ${({ theme }) => css`
    > span {
      display: block;
      margin-bottom: 0.5rem;
      color: ${theme.colors.primary};
      font-weight: 600;
    }

    > h1 {
      font-size: 2.7rem;
      font-weight: 600;
      color: ${theme.colors.gray};
    }

    strong {
      display: block;
      margin-top: 2rem;
      font-size: 1.5rem;
      color: ${theme.colors.gray};
    }

    p {
      width: 30rem;
      color: ${theme.colors.gray_medium};
      font-size: 0.875rem;
      line-height: 1.5rem;
      font-weight: 500;
    }

    .btn {
      display: flex;
      gap: 8px;
      align-items: center;
      width: max-content;
      margin-top: 35px;
      cursor: pointer;
      border-radius: 3px;
      letter-spacing: 0.3px;
      padding: 10px 0;
      font-weight: 500;
      color: ${theme.colors.gray};
      transition: all 0.3s linear;

      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        padding: 10px 42px;
      }
    }
  `};
`;

export const Slider = styled.div`
  ${({ theme }) => css`
    position: relative;

    .timeline {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-bottom: 1rem;
      position: absolute;
      left: 2rem;
      bottom: -0.5rem;

      > div {
        display: block;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        background-color: ${theme.colors.gray_light};
      }

      & .active {
        background-color: ${theme.colors.primary};
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 1rem;
      right: 50px;
      align-items: center;
      padding: 0.7rem 1.5rem;
      width: 10rem;
      gap: 2rem;
      background-color: ${theme.colors.primary};

      svg {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        color: ${theme.colors.white};
      }
    }
  `};
`;
