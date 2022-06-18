import styled from 'styled-components';

export const Container = styled.header`
  position: relative;

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }

  > section {
    display: flex;
    align-items: center;
    height: calc(100vh - 198px);
    color: #222222;

    > div {
      padding: 1.5rem 2rem;

      > h1 {
        font-size: 3rem;
        margin: 0;
        padding: 0;
      }

      > p {
        max-width: 25rem;
        text-align: justify;
        margin-bottom: 2rem;
      }
    }
  }

  > .icons {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    font-size: 20px;
    position: absolute;
    right: 2rem;
    bottom: 0;
  }
`;

export const List = styled.ul`
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
`;
