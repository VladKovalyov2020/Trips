import React from 'react';

//Modules

//import Fade from 'react-reveal/Fade';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { TripsItem } from '../TripsSection/TripsItem';
import { tripsList } from '../../constans/index';

// Styles

import './styles.scss';

//------------

export const TripsSection = () => {
  return (
    <section id="trips" className="trips">
      <ContentWidthLimiter>
        <div className="trips__content" id="about-picture">
          <div className="title trips__title">
            <p>Journey</p>
            <h3>Journey</h3>
            <h2>Your Journey Starts Here</h2>
          </div>

          <TripsItem list={tripsList} />
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
