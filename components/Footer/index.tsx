import type { NextPage } from 'next';

import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { Container } from './styles';

const Footer: NextPage = () => (
  <Container>
    <div>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/brenda-matias/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/brendamatias" target="_blank" rel="noreferrer">
            <FaBehance />
          </a>
        </li>
        <li>
          <a href="https://github.com/brendamatias" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/brendasobralmatias" target="_blank" rel="noreferrer">
            <GrInstagram />
          </a>
        </li>
      </ul>

      <span>Made with ❤️ and lots of ☕ from 2022 ©</span>
    </div>
  </Container>
);

export default Footer;
