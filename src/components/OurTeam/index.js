import React from 'react';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { OurTeamSlider } from './OurTeamSlider';

// Styles

import './styles.scss';

//-----------

export const OurTeam = () => {
  return (
    <section id="ourteam" className="ourteam">
      <ContentWidthLimiter>
        <div className="ourteam__content">
          <div className="title ourteam__title">
            <p>Our Team</p>
            <h3>Amazing Staff</h3>
            <h2>Meet Our Team</h2>
          </div>
          <OurTeamSlider />
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
