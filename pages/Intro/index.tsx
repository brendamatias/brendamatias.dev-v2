import type { NextPage } from 'next';

import { Container } from './styles';

const Intro: NextPage = () => (
  <Container>
    <div>
      <h1>hey! i'm Brenda Matias.</h1>
      <h1>Full Stack Software Enginner.</h1>

      <p>
        I am passionate about software development, where I seek to improve myself in technologies that simplify and
        evolve people's daily lives. I currently reside in Recife, Pernambuco and have experience in full stack
        development.
      </p>

      <button type="button">see my projects</button>
    </div>
  </Container>
);

export default Intro;
