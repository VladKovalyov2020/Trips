import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const Input = props => {
  const {
    placeholder,
    rightBlock,
    className,
    onChange,
    onFocus,
    onBlur,
    error,
    value,
    name,
    type,
    id,
    ...rest
  } = props;

  const inputClass = classNames(
    {
      input: true,
      'input--right-block': !!rightBlock,
      'input--error': error,
    },
    className
  );

  const rightBlockClass = classNames({
    'input__right-block': true,
  });

  return (
    <div className={inputClass}>
      <input
        autoComplete={type === 'password' ? 'new-password' : 'off'}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        type={type}
        name={name}
        id={id}
        {...rest}
      />

      {rightBlock && <div className={rightBlockClass}>{rightBlock}</div>}
    </div>
  );
};

// Type of props

Input.propTypes = {
  placeholder: types.string,
  className: types.string,
  onChange: types.func,
  onFocus: types.func,
  onBlur: types.func,
  error: types.string,
  value: types.string,
  name: types.string,
  rest: types.string,
};

// Default value for props

Input.defaultProps = {
  placeholder: 'Please enter',
  type: 'text',
};
