import React from 'react';

//Modules

import types from 'prop-types';

// Styles

import './styles.scss';

//------------

export const ContactQuickLinks = props => {
  const { list } = props;

  return (
    <div className="contact-links">
      {list.map((item, index) => {
        return (
          <a key={index} href={`#${item.to}`} className="contact-links__item">
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

// Type of props

ContactQuickLinks.propTypes = {
  list: types.array.isRequired,
};
