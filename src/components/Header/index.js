import React, { useState } from 'react';

// Modules

import { useWindowWidth } from '../../hooks/useWindowWidth';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { HamburgerButton } from './HamburgerButton';
import { Sidebar } from './Sidebar';

// Constans

import { navbarList, sidebarList } from '../../constants/index';

// Styles

import './styles.scss';

//-----------------

export const Header = () => {
  const [isSidebarShow, toggleSidebarShow] = useState(false);

  const toggleHandler = () => {
    toggleSidebarShow(!isSidebarShow);
  };

  const isMobile = useWindowWidth() < 576;

  if (!isMobile && isSidebarShow) {
    toggleSidebarShow(false);
  }

  return (
    <>
      <header className="header">
        <ContentWidthLimiter>
          <div className="header__content">
            <Logo />

            <div className="header__nav-wrapper">
              <Navbar list={navbarList} />
              <HamburgerButton
                handleClick={toggleHandler}
                isOpen={isSidebarShow}
              />
            </div>
          </div>
        </ContentWidthLimiter>
      </header>
      <Sidebar
        isOpen={isSidebarShow}
        list={sidebarList}
        handleClick={toggleHandler}
      />
    </>
  );
};
