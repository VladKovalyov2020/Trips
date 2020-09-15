import React from 'react';

// Components

import { Header } from '../../components/Header';
import { Home } from '../../components/Home';
import { About } from '../../components/About';
import { Trips } from '../../components/Trips';
import { OurTeam } from '../../components/OurTeam';
import { OurBlog } from '../../components/OurBlog';
import { Contact } from '../../components/Contact';
import { ButtonUp } from '../../components/ButtonUp';

// Styles

import './styles.scss';

// --------------

export const LandingPage = () => {
  return (
    <div className="landing">
      <Header />
      <Home />
      <About />
      <Trips />
      <OurTeam />
      <OurBlog />
      <Contact />

      <ButtonUp className="landing__button-up" />
    </div>
  );
};
