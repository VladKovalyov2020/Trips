import React from 'react';

// Modules

import types from 'prop-types';
import { IoMdCloseCircle } from 'react-icons/io';

// Components

import { ReactIcon } from '../../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export default function ModalHeader(props) {
  const { onClose, title } = props;

  return onClose || title ? (
    <div className="modal-header">
      {onClose && (
        <ReactIcon
          className="modal-header__close-btn"
          onClick={onClose}
          size="xl"
        >
          <IoMdCloseCircle />
        </ReactIcon>
      )}
    </div>
  ) : null;
}

// Type of props

ModalHeader.propTypes = {
  onClose: types.func,
  title: types.string,
};
