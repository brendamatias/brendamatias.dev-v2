import type { NextPage } from 'next';

import Image from 'next/image';
import { MdOutlineArrowForward } from 'react-icons/md';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Container, Nav } from './styles';
import logo from '../../assets/logo.png';

const Header: NextPage = () => {
  const links = ['about', 'experience', 'projects', 'contact'];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  const isLinkActive = (link: string) => window && window.location && window.location.hash === `#${link}`;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className={`${scrollPosition > 100 && 'headerScroll'}`}>
      <div>
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
                  <a href={`#${link}`} className={`${isLinkActive(link) && 'active'} link`}>
                    <strong>0{index + 1}.</strong> {link}
                  </a>
                </li>
              ))}
              <li>
                <a href="/curriculum.pdf" target="_blank" rel="noreferrer" className="button">
                  resume <MdOutlineArrowForward />
                </a>
              </li>
            </ul>
          </Nav>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
