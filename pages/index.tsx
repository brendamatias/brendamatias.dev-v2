import type { NextPage } from 'next';

import { useState } from 'react';
import Header from './Header';
import Intro from './Intro';

import { Container } from './styles';

const Home: NextPage = () => {
  const [section, setSection] = useState(1);

  return (
    <Container>
      <Header />
      {section === 1 && <Intro />}
    </Container>
  );
};

export default Home;
