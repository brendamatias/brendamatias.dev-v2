import styled from 'styled-components';

export const Container = styled.header`
  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
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
