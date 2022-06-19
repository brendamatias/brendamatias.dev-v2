import type { NextPage } from 'next';
import Header from '../components/Header';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: NextPage = () => (
  <main className="main">
    <Header />
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
    <Footer />
  </main>
);

export default Home;
