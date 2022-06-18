import type { NextPage } from 'next';

import Header from './Header';

import { Container } from './styles';

const Home: NextPage = () => (
  <Container>
    <Header />
  </Container>
);

export default Home;
