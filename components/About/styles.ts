import styled, { css } from 'styled-components';

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
          }

          > .skill-bar {
            position: relative;
            background-color: ${theme.colors.gray_light};
            border-radius: 2px;
            width: 100%;
            height: 12px;
            transition: ease all 0.55s;

            > .skill-bar-in {
              position: absolute;
              top: 0;
              height: 100%;
              width: 100%;
              border-top-left-radius: 2px;
              border-bottom-left-radius: 2px;
              background-color: ${theme.colors.primary};

              > span {
                position: absolute;
                right: 0;
                bottom: 20px;
                background: ${theme.colors.gray};
                padding: 3px 8px;
                color: #fff;
                font-size: 10px;
                font-weight: 600;
                border-radius: 8px 8px 0 8px;

                &::after {
                  content: '';
                  position: absolute;
                  bottom: -11px;
                  right: 0;
                  border-left: 10px solid transparent;
                  border-top: 12px solid ${theme.colors.gray};
                }
              }
            }
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
      color: ${theme.colors.gray_medium};
      margin-top: 1rem;

      @media (max-width: 650px) {
        max-width: 100%;
      }
    }
  `};
`;
