import type { NextPage } from 'next';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import { Wrapper } from './styles';

const Home: NextPage = () => (
  <Wrapper>
    <Header />
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  </Wrapper>
);

export default Home;
