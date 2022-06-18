import type { NextPage } from 'next';
import Header from './Header';
import Intro from './Intro';
import About from './About';

import { Wrapper } from './styles';

const Home: NextPage = () => (
  <Wrapper>
    <Header />
    <div>
      <Intro />
      <About />
    </div>
  </Wrapper>
);

export default Home;
