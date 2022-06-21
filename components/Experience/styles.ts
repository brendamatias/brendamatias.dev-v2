import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};

    > div {
      max-width: 1100px;
      margin: 0 auto;
      padding: 5rem 2rem;

      .title {
        display: flex;
        justify-content: center;

        @media screen and (max-width: 768px) {
          justify-content: flex-start;
        }
      }
    }
  `};
`;

export const Timeline = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -1px;
      width: 2px;
      height: 100%;
      background: ${theme.colors.gray_light};
      z-index: 1;
    }

    > .timeline-item {
      width: calc(50% + 8px);
      display: flex;
      justify-content: space-between;
      clear: both;
    }

    > .timeline-item-right {
      float: right;
    }

    > .timeline-item-left {
      float: left;
      direction: rtl;
    }

    .marker {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid ${theme.colors.background.primary};
      background: ${theme.colors.primary};
      margin-top: 10px;
      z-index: 9999;
    }

    .timeline-content {
      width: 95%;
      padding: 0 1rem;
      color: ${theme.colors.gray};

      > h3 {
        margin-top: 5px;
        font-size: 1.2rem;
        font-weight: 600;
      }

      > span {
        display: block;
        font-size: 0.875rem;
        color: #c2c2c2;
        margin-bottom: 0.875rem;
      }

      p {
        font-size: 14px;
        line-height: 1.5em;
        color: ${theme.colors.gray_medium};
      }
    }

    @media screen and (max-width: 768px) {
      &:before {
        left: 8px;
        width: 2px;
      }

      .timeline-item-right {
        float: none;
      }

      .timeline-item-left {
        float: none;
        direction: ltr;
      }

      > .timeline-item {
        width: 100%;
        margin-top: 1rem;
      }
    }
  `};
`;
