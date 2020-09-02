import React from 'react';

// Modules

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
      {/* {title && <p className="modal-header__title">{title}</p>} */}

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
