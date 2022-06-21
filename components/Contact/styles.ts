import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};

    > div {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;

      @media (max-width: 650px) {
        flex-direction: column;
      }

      gap: 4rem;
      padding: 5rem 2rem;

      img {
        border-radius: 0.875rem;
      }
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 3rem;

    @media (max-width: 480px) {
      gap: 0;
    }

    > div {
      .title {
        display: flex;
        justify-content: center;
        gap: 3rem;

        @media (max-width: 480px) {
          gap: 1.5rem;
        }

        > h1 {
          font-size: 2.5rem;
          color: ${theme.colors.gray};
          max-width: 30rem;
          text-align: center;

          @media (max-width: 480px) {
            font-size: 1.875rem !important;
            max-width: 100%;
          }
        }

        .emailIconContainer {
          position: relative;

          > .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            background-color: ${theme.colors.primary_light};
            color: ${theme.colors.primary};
            width: 40px;
            height: 40px;
            border-radius: 50%;
            right: -18px;
            top: -1px;
            box-shadow: 10px 20px 20px #dedede;

            svg {
              z-index: 3;
            }
          }

          > .line {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 4px;
            height: 8rem;
            border-radius: 10px;
            background-color: ${theme.colors.primary_light};

            @media (max-width: 480px) {
              height: 100%;
            }
          }
        }
      }

      > p {
        display: block;
        margin-top: 2rem;
        font-size: 1rem;
        max-width: 45rem;
        text-align: center;
        color: ${theme.colors.gray_medium};
      }
    }
  `};
`;
