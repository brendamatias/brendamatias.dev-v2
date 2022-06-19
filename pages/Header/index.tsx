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
      {/* <div className="icons">
        <BsMouse />
        <IoIosArrowRoundDown />
      </div> */}
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
            <button type="button" className="button">
              resume <MdOutlineArrowForward />
            </button>
          </li>
        </List>
      </nav>
    </Container>
  );
};

export default Header;
