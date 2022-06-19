import type { NextPage } from 'next';
import Header from '../components/Header';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: NextPage = () => (
  <main className="main">
    <Header />
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  </main>
);

export default Home;
