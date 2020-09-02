import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const Button = props => {
  const { fluidWidth, children, onClick, size, color, variant } = props;

  const nameClass = classNames({
    button: true,
    [`button--variant-${variant}`]: variant,
    [`button--color-${color}`]: color,
    [`button--size-${size}`]: size,
    'button--fluid-width': fluidWidth,
    login__btn: true,
    trip__btn: true,
  });

  return (
    <button className={nameClass} onClick={onClick}>
      {children}
    </button>
  );
};

// Type of props

Button.propTypes = {
  fluidWidth: types.bool,
  children: types.node.isRequired,
  onClick: types.func,
  color: types.oneOf(['brawn', 'black']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
};

// Default value for props

Button.defaultProps = {
  color: 'brawn',
  size: 'sm',
};
