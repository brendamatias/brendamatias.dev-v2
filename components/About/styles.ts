import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};

    > div {
      max-width: 1100px;
      margin: 0 auto;
      gap: 4rem;
      padding: 5rem 2rem;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: flex-end;
      justify-content: space-between;
      gap: 4rem;

      @media (max-width: 650px) {
        grid-template-columns: 1fr;
      }

      > ul {
        > li:not(:last-child) {
          margin-bottom: 1rem;
        }

        > li {
          > span {
            display: block;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            color: ${theme.colors.text};
          }
        }
      }
    }
  `};
`;

export const AboutMe = styled.div`
  ${({ theme }) => css`
    > p {
      max-width: 30rem;
      color: ${theme.colors.text_medium};
      margin-top: 1rem;

      @media (max-width: 650px) {
        max-width: 100%;
      }
    }
  `};
`;

type SkillBarProps = {
  width: number;
};

const progressBar = (width: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width}%;
  }
`;

export const SkillBar = styled.div<SkillBarProps>`
  ${({ theme, width }) => css`
    position: relative;
    background-color: ${theme.colors.text_light};
    border-radius: 2px;
    width: 100%;
    height: 12px;
    transition: ease all 0.55s;

    > .skill-bar-in {
      position: absolute;
      top: 0;
      height: 100%;
      width: ${width}%;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      background-color: ${theme.colors.primary};
      animation-fill-mode: both;
      animation: ${progressBar(width)} 3s ease-in-out;

      > span {
        position: absolute;
        right: 0;
        bottom: 20px;
        background: ${theme.colors.text};
        padding: 3px 8px;
        color: ${theme.colors.text_light};
        font-size: 10px;
        font-weight: 600;
        border-radius: 8px 8px 0 8px;

        &::after {
          content: '';
          position: absolute;
          bottom: -11px;
          right: 0;
          border-left: 10px solid transparent;
          border-top: 12px solid ${theme.colors.text};
        }
      }
    }
  `}
`;
