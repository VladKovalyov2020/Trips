import React, { useState } from 'react';

// Modules

import { IoIosPlay } from 'react-icons/io';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { ReactIcon } from '../ReactIcon';
import { HomeModal } from '../modals/HomeModal';

// Styles

import './styles.scss';

//------------

export const Home = () => {
  const [modalOpenHome, setModalOpenHome] = useState(false);

  function openModalHandler() {
    setModalOpenHome(true);
  }

  function onClose() {
    setModalOpenHome(false);
  }

  return (
    <section id="home" className="home">
      <ContentWidthLimiter>
        <div className="home__content">
          <div className="home__title">
            <h1>Let's Enjoy The Wonders of Nature</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              veritatis in tenetur doloremque, maiores doloribus officia iste.
              Dolores.
            </p>
          </div>
          <div className="home__link">
            <a>
              <div
                onClick={() => openModalHandler()}
                className="link link__icon-wrapper"
              >
                <ReactIcon
                  className="icon-wrapper icon-wrapper__icon"
                  size="xl"
                >
                  <IoIosPlay />
                </ReactIcon>
              </div>
            </a>

            <p>Watch the video</p>
          </div>
        </div>
      </ContentWidthLimiter>
      {modalOpenHome && (
        <HomeModal
          open={openModalHandler}
          onClose={onClose}
          title={'test'}
          width="xs"
        />
      )}
    </section>
  );
};
