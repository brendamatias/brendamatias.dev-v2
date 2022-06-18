import type { NextPage } from 'next';

import Image from 'next/image';
import { MdOutlineArrowForward } from 'react-icons/md';
import { BsMouse } from 'react-icons/bs';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { Container, List } from './styles';
import logo from '../../assets/logo.png';

const Header: NextPage = () => {
  const links = ['about', 'experience', 'projects', 'contact'];

  return (
    <Container>
      <div className="icons">
        <BsMouse />
        <IoIosArrowRoundDown />
      </div>
      <nav>
        <Image src={logo} alt="Brenda Matias Logo" />

        <List>
          {links.map((link, index) => (
            <li key={link}>
              <a href={`#${link}`} className={`${index === 0 && 'active'}`}>
                <strong>0{index + 1}.</strong> {link}
              </a>
            </li>
          ))}
          <li>
            <button type="button">
              resume <MdOutlineArrowForward />
            </button>
          </li>
        </List>
      </nav>

      <section>
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
      </section>
    </Container>
  );
};

export default Header;
