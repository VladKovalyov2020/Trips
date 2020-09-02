import React from 'react';

//Modules

import classNames from 'classnames';
import types from 'prop-types';

// Components

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

ContactQuickLinks.propTypes = {
  list: types.array.isRequired,
};
