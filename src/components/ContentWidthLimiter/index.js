import React from 'react';

// Modules

import classnames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// -------------

export const ContentWidthLimiter = props => {
  const { fullWidth, children, className, width } = props;

  const contentLiminterClass = classnames(
    {
      'content-limiter': true,
      'content-limiter--full-width': fullWidth,
      [`content-limiter--width-${width}`]: width,
    },
    className
  );

  return <div className={contentLiminterClass}>{children}</div>;
};

// Type of props

ContentWidthLimiter.propTypes = {
  className: types.string,
  fuiiWidth: types.bool,
  children: types.node.isRequired,
  width: types.oneOf(['sm', 'lg']),
};

// Default value for props

ContentWidthLimiter.defaultProps = {
  width: 'sm',
};
