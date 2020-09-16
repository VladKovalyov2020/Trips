import React from 'react';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { OurTeamSlider } from './OurTeamSlider';
import { Title } from '../../components/Title';
import { ourTeamTitleList } from '../../constants/index';

// Styles

import './styles.scss';

//-----------

export const OurTeam = () => {
  return (
    <section id="ourteam" className="ourteam">
      <ContentWidthLimiter>
        <div className="ourteam__content">
          <Title className="ourteam__title" list={ourTeamTitleList} />
          <OurTeamSlider />
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
