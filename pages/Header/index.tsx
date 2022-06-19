import type { NextPage } from 'next';

import Image from 'next/image';
import { MdOutlineArrowForward } from 'react-icons/md';
// import { BsMouse } from 'react-icons/bs';
// import { IoIosArrowRoundDown } from 'react-icons/io';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { Container, Nav } from './styles';
import logo from '../../assets/logo.png';

const Header: NextPage = () => {
  const links = ['about', 'experience', 'projects', 'contact'];
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Container>
      <div>
        {/* <div className="icons">
        <BsMouse />
        <IoIosArrowRoundDown />
      </div> */}

        <nav>
          <Image src={logo} alt="Brenda Matias Logo" width={50} height={50} quality="100%" />

          <Nav>
            <div className="menuBurger">
              <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                {isOpenMenu ? <IoMdClose /> : <IoMdMenu />}
              </button>
            </div>

            <ul className={`${isOpenMenu && 'visible'}`}>
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
            </ul>
          </Nav>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
