import type { NextPage } from 'next';

import Image from 'next/image';
import { MdOutlineMail } from 'react-icons/md';
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { Container, Content, Description } from './styles';
import profile from '../../assets/profile.png';

const Intro: NextPage = () => (
  <Container>
    <Content>
      <Description>
        <span>Hello, my name is</span>

        <h1>Brenda Matias</h1>
        <h2>Web Developer</h2>

        <div>
          <a href="mailto:brendamatias.sobral@gmail.com">
            <MdOutlineMail /> brendamatias.sobral@gmail.com
          </a>

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
        </div>
        <a href="#projects" className="button">
          see my projects
        </a>
      </Description>
    </Content>

    <div className="image">
      <div>
        <Image alt="Brenda Matias" priority src={profile} layout="fill" objectFit="cover" quality="100%" />
      </div>
    </div>
  </Container>
);

export default Intro;
