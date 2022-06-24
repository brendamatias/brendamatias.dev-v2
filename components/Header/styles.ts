import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    position: fixed;
    z-index: 99999;

    @media (max-width: 900px) {
      position: fixed;
      z-index: 99999;
      background-color: ${theme.colors.background.primary};
    }

    > div {
      max-width: 1100px;
      margin: 0 auto;
      padding: 1.5rem 2rem;
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

    &.headerScroll {
      background-color: ${theme.colors.background.primary};
      box-shadow: 0 2px 2px -2px rgb(0 0 0 / 15%);
    }
  `}
`;

export const Nav = styled.div`
  ${({ theme }) => css`
    > div {
      display: flex;
      gap: 2rem;

      > ul {
        display: flex;
        align-items: center;
        gap: 2rem;

        > li {
          > .link {
            color: ${theme.colors.text};
            border-bottom: 3px solid transparent;
            padding-bottom: 8px;

            &:hover,
            &.active {
              border-color: #fa2373;
            }
          }
        }
      }
    }

    .menuBurger {
      display: none;

      svg {
        transition: all 0.2s;
        font-size: 1.5rem;
        color: ${theme.colors.text};

        &:hover {
          color: ${theme.colors.primary};
        }
      }
    }

    @media (max-width: 900px) {
      position: absolute;
      top: 0;
      right: 0;

      > div > ul {
        flex-direction: column;
        align-items: flex-end;
        background-color: ${theme.colors.background.primary};
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
        top: 1rem;
        right: 1rem;
        z-index: 2;
      }

      .visible {
        display: flex;
      }
    }
  `}
`;

export const ToggleMode = styled.div`
  ${() => css`
    border-radius: 50%;
    width: 43px;
    height: 43px;
    position: relative;
    overflow: hidden;

    > .sun-icon,
    > .moon-icon {
      position: absolute;

      transition-property: opacity, transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 1000ms;

      svg {
        font-size: 30px;
      }
    }

    > .sun-icon {
      svg {
        color: #ffbb52;
      }

      transform: translateX(7px) translateY(6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);

      &.hide-sun {
        transform: translateX(7px) translateY(6px) rotate(-90deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
        transform-origin: 50% 100px;
        opacity: 0;
      }
    }

    > .moon-icon {
      transform: translateX(7px) translateY(6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);

      svg {
        color: #2e2e2e;
      }

      &.hide-moon {
        transform: translateX(7px) translateY(6px) rotate(90deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
        transform-origin: 50% 100px;
        opacity: 0;
      }
    }

    @media (max-width: 900px) {
      border-radius: 50%;
      width: 43px;
      height: 43px;
      position: absolute;
      overflow: hidden;
      display: none;

      > .sun-icon,
      > .moon-icon {
        font-size: 0.5rem;
        position: absolute;
        transition-property: opacity, transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 1000ms;

        svg {
          font-size: 20px;
        }
      }

      > .sun-icon {
        svg {
          color: #ffbb52;
        }

        transform: translateX(7px) translateY(6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);

        &.hide-sun {
          transform: translateX(7px) translateY(6px) rotate(-90deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
          transform-origin: 50% 100px;
          opacity: 0;
        }
      }

      > .moon-icon {
        transform: translateX(7px) translateY(6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);

        &.hide-moon {
          transform: translateX(7px) translateY(6px) rotate(90deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
          transform-origin: 50% 100px;
          opacity: 0;
        }
      }
    }
  `}
`;
