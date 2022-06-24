import type { NextPage } from 'next';

import Image from 'next/image';
import { MdOutlineArrowForward } from 'react-icons/md';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import { Container, Nav, ToggleMode } from './styles';
import logo from '../../assets/logo.svg';
import logoWhite from '../../assets/logo-white.svg';
import { ThemeContext } from '../../contexts/theme';

const Header: NextPage = () => {
  const links = ['about', 'experience', 'projects', 'contact'];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleScroll = () => setScrollPosition(window.scrollY);

  const isLinkActive = (link: string) => {
    if (typeof window !== 'undefined') {
      return window.location?.hash === `#${link}`;
    }

    return false;
  };

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
          <Image
            src={theme === 'dark' ? logoWhite : logo}
            alt="Brenda Matias Logo"
            width={50}
            height={50}
            quality="100%"
          />

          <Nav>
            <div className="menuBurger">
              <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                {isOpenMenu ? <IoMdClose /> : <IoMdMenu />}
              </button>
            </div>

            <div>
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

              <ToggleMode>
                <div className={`sun-icon ${theme === 'light' && 'hide-sun'}`}>
                  <button type="button" onClick={toggleTheme}>
                    <FiSun />
                  </button>
                </div>
                <div className={`moon-icon ${theme === 'dark' && 'hide-moon'}`}>
                  <button type="button" onClick={toggleTheme}>
                    <FiMoon />
                  </button>
                </div>
              </ToggleMode>
            </div>
          </Nav>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
