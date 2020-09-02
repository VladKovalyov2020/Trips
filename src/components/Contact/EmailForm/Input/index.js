import React from 'react';

// Modules

import classNames from 'classnames';

// Styles

import './styles.scss';

// ----------------

// Default value for props

Input.defaultProps = {
  placeholder: 'Please enter',
  type: 'text',
};

// ----------------

export default function Input(props) {
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
}
