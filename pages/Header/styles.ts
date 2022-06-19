import styled from 'styled-components';

export const Container = styled.header`
  background: linear-gradient(90deg, #fff 70%, #fff0fc 40%);

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    max-width: 1100px;
    margin: 0 auto;
    z-index: 999;
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
