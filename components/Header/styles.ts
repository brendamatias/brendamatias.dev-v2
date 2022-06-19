import styled, { css } from 'styled-components';

export const Container = styled.header`
  background: linear-gradient(90deg, #fff 70%, #fff0fc 40%);
  width: 100%;

  @media (max-width: 900px) {
    position: fixed;
    z-index: 99999;
    background: #fff;
  }

  > div {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem;
    z-index: 999;
    position: relative;

    @media (max-width: 900px) {
      padding: 1rem 2rem;
    }

    > nav {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > .icons {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4.5rem;
      font-size: 20px;
      position: fixed;
      width: 100%;
      padding: 2rem;
      max-width: 1100px;
      bottom: 4rem;
    }
  }
`;

export const Nav = styled.div`
  ${({ theme }) => css`
    > ul {
      display: flex;
      align-items: center;
      gap: 2rem;

      > li {
        > a {
          color: #222222;
          border-bottom: 3px solid transparent;
          padding-bottom: 8px;
          transition: 0.3s;

          &:hover,
          &.active {
            border-color: #fa2373;
          }
        }
      }
    }

    .menuBurger {
      display: none;

      svg {
        transition: all 0.2s;
        font-size: 1.5rem;
        color: ${theme.colors.gray};

        &:hover {
          color: ${theme.colors.primary};
        }
      }
    }

    @media (max-width: 900px) {
      position: absolute;
      top: 0;
      right: 0;

      > ul {
        flex-direction: column;
        align-items: flex-end;
        background-color: #fff;
        box-shadow: 0 10px 53px 0 rgba(72, 49, 212, 0.05);
        font-size: 0.875rem;
        transition: box-shadow 0.4s;
        padding: 5rem 2rem 2rem 2rem;
        border-radius: 0.3rem;
        display: none;
      }

      .menuBurger {
        display: block;
        position: absolute;
        top: 1.5rem;
        right: 2rem;
        z-index: 2;
      }

      .visible {
        display: flex;
      }
      /* &::after {
      content: 'X';
    } */

      /* display: none; */
      /* position: absolute;
    align-items: flex-end;
    flex-direction: column;
    top: 84px;
    right: 32px;
    background-color: #fff;
    font-size: 0.875rem;
    transition: 0.3s;

    > li {
    } */
    }
  `}
`;
