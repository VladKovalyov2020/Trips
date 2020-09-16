import React from 'react';

//Modules

import Fade from 'react-reveal/Fade';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { Title } from '../Title';

// Constans

import { aboutTitleList } from '../../constants/index';

// Assets

import picture from '../../assets/images/traveler.jpg';

// Styles

import './styles.scss';

//------------

export const About = () => {
  return (
    <section id="about" className="about">
      <ContentWidthLimiter>
        <div className="about__content" id="about-picture">
          <div className="about__wrapper">
            <Title className="about__title" list={aboutTitleList} />

            <div className="about__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                quae expedita fugiat quo incidunt, possimus temporibus aperiam
                eum, quaerat sapiente.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos debitis enim a pariatur molestiae.
              </p>
            </div>
          </div>
          <div className="about__picture">
            <Fade left>
              <img src={picture} alt="traveler" />
            </Fade>
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
