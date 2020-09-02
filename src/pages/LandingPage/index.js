import React from 'react';

// Components

import { Header } from '../../components/Header';
import { HomeSection } from '../../components/HomeSection';
import { AboutSection } from '../../components/AboutSection';
import { TripsSection } from '../../components/TripsSection';
import { OurTeam } from '../../components/OurTeam';
import { OurBlog } from '../../components/OurBlog';
import { Contact } from '../../components/Contact';

// Styles

import './styles.scss';

// --------------

export const LandingPage = () => {
  return (
    <div className="landing">
      <Header />
      <HomeSection />
      <AboutSection />
      <TripsSection />
      <OurTeam />
      <OurBlog />
      <Contact />
    </div>
  );
};
