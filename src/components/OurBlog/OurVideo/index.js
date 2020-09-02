import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const OurVideo = props => {
  const { title, src } = props;

  const nameClass = classNames({
    'video-iframe': true,
  });

  return (
    <div className={nameClass}>
      <iframe
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title={title}
        type="text/html"
        src={src}
      />
    </div>
  );
};

// Type of props

OurVideo.propTypes = {
  title: types.string.isRequired,
};

// Default value for props

OurVideo.defaultProps = {
  title: 'Video',
  src: 'https://www.youtube.com/embed/1XTvrXLfheI',
};
