import React from 'react';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { TripsItem } from './TripsItem';
import { tripsList } from '../../constants/index';
import { Title } from '../../components/Title';
import { tripsTitleList } from '../../constants/index';

// Styles

import './styles.scss';

//------------

export const Trips = () => {
  return (
    <section id="trips" className="trips">
      <ContentWidthLimiter>
        <div className="trips__content" id="about-picture">
          <Title className="trips__title" list={tripsTitleList} />
          <TripsItem list={tripsList} />
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
