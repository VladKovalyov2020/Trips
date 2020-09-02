import React from 'react';

//Modules

// Components

// Styles

import './styles.scss';

//------------

export const ContactSocialFoto = props => {
  const { list } = props;

  return (
    <div className="contact-social">
      {list.map((item, index) => {
        return (
          <div className="contact-social__image-wrapper" key={index}>
            <a href={item.link} target="_blank">
              <img src={item.img} alt={`contact-social-image-${item.title}`} />
            </a>
          </div>
        );
      })}
    </div>
  );
};
