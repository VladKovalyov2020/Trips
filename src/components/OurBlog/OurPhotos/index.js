import React, { useState } from 'react';

// Components

import { OurPhotoCard } from './OurPhotoCard';

// Constants

import { ourPhotosList } from '../../../constants/index';

// Styles

import './styles.scss';

// ----------------

export const OurPhotosCard = () => {
  const [currentPhotoId, setCurrentPhoto] = useState(ourPhotosList[0].id);

  const currentPhotoCard = ourPhotosList.find(
    ({ id }) => id === currentPhotoId
  );

  const setPhotoHandler = id => {
    setCurrentPhoto(id);
  };

  return (
    <section className="our-photos">
      <div className="our-photos__content">
        <div className="our-photos__main-photo-wrapper">
          <img
            className="img-cover"
            src={currentPhotoCard.img}
            alt="current-img"
          />
        </div>

        <ul className="our-photos__preview-list">
          {ourPhotosList.map(({ title, img, date, id }) => {
            return (
              <OurPhotoCard
                onClick={setPhotoHandler}
                active={currentPhotoId === id}
                title={title}
                date={date}
                image={img}
                key={id}
                id={id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
