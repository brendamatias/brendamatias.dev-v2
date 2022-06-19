import type { NextPage } from 'next';

import { MdOutlineEmail } from 'react-icons/md';
import { Container, Info, Form } from './styles';

const Projects: NextPage = () => (
  <Container>
    <div>
      <Info>
        <div className="emailIconContainer">
          <div className="icon">
            <MdOutlineEmail />
          </div>
          <div className="line" />
        </div>
        <div>
          <h1>que tal começar um projeto juntos?</h1>

          <p>
            Do you want to know more about me or talk about a potential project? Send me an email, even if it's just to
            say hi!
          </p>
        </div>
      </Info>

      <Form>
        <label htmlFor="name">
          Nome
          <input id="name" type="text" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea id="description" />
        </label>

        <button type="submit" className="button">
          Enviar
        </button>
      </Form>
    </div>
  </Container>
);

export default Projects;
