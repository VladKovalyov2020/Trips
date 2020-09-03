import React, { useState } from 'react';

// Modules

import types from 'prop-types';
import { IoIosPlay } from 'react-icons/io';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { ReactIcon } from '../ReactIcon';
import ModalHome from '../modals/ModalHome';

// Styles

import './styles.scss';

//------------

export const HomeSection = props => {
  const modalOpenHome = useState(false);

  function openModalHandler() {
    modalOpenHome[1](true);
  }

  function onClose() {
    modalOpenHome[1](false);
  }

  return (
    <section id="home" className="home">
      <ContentWidthLimiter>
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
              <ReactIcon className="icon-wrapper icon-wrapper__icon" size="xl">
                <IoIosPlay />
              </ReactIcon>
            </div>
          </a>

          <p>Watch the video</p>
        </div>
      </ContentWidthLimiter>
      {modalOpenHome[0] && (
        <ModalHome
          open={modalOpenHome[0]}
          onClose={onClose}
          title={'test'}
          width="xs"
        />
      )}
    </section>
  );
};

// Type of props

HomeSection.propTypes = {
  modalOpenHome: types.func,
};
