import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const OurPhotoCard = props => {
  const { active, image, title, date, onClick, id } = props;

  const nameClass = classNames({
    'preview-photo-card': true,
    'preview-photo-card--active': active,
  });

  return (
    <li className={nameClass} onClick={() => onClick(id)}>
      <div className="preview-photo-card__img-wrapper">
        <img className="img-cover" src={image} alt={`preview-photo-${title}`} />
      </div>

      <div className="preview-photo-card__info">
        <p>{title}</p>

        <time>{date}</time>
      </div>
    </li>
  );
};

// Type of props

OurPhotoCard.propTypes = {
  active: types.bool.isRequired,
  image: types.string.isRequired,
  date: types.string.isRequired,
  title: types.string.isRequired,
  onClick: types.func,
};

// Default value for props

OurPhotoCard.defaultProps = {};
