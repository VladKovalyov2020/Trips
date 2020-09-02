import React, { useEffect, useState } from 'react';

//Modules

import picture from '../../assets/images/traveler.jpg';
import Fade from 'react-reveal/Fade';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';

// Styles

import './styles.scss';

//------------

export const AboutSection = () => {
  // const [animation, setAnimation] = useState(false);

  // useEffect(() => {
  //   const element = document.getElementById('about-picture');

  //   if (isInViewport(element)) {
  //     setAnimation(true);
  //   }

  //   window.addEventListener('scroll', () => handlerScroll(element));
  //   return () =>
  //     window.removeEventListener('scroll', () => handlerScroll(element));
  // }, []);

  // function handlerScroll(element) {
  //   if (isInViewport(element)) {
  //     setAnimation(true);
  //   } else {
  //     setAnimation(false);
  //   }
  // }

  // function isInViewport(element) {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  return (
    <section id="about" className="about">
      <ContentWidthLimiter>
        <div className="about__content" id="about-picture">
          <div className="about__wrapper">
            <div className="title about__title">
              <p>Story</p>
              <h3>Discover story</h3>
              <h2>Our Story</h2>
            </div>
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
            <Fade left /*when={animation}*/>
              <img src={picture} alt="traveler" />
            </Fade>
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
