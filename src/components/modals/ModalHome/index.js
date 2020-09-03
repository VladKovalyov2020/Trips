import React, { useState } from 'react';

// Components

import Modal from '../../Modal';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export default function ModalHome(props) {
  const { open, onClose, title, src } = props;

  const nameClass = classNames({
    'video-iframe': true,
  });

  return (
    <Modal open={open} onClose={onClose} title={title} width="md">
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
    </Modal>
  );
}

// Type of props

ModalHome.propTypes = {
  open: types.bool,
  onClose: types.func,
  title: types.string.isRequired,
  src: types.string.isRequired,
};

// Default value for props

ModalHome.defaultProps = {
  title: 'Video',
  src: 'https://www.youtube.com/embed/DAtvupNKzEU',
};
