import React from 'react';

// Modules
import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

//-------------

export const Title = props => {
  const { list, className } = props;

   const titleClass = classNames(
    'title',
    className
  );

return (
    <>
      {list.map((item, index) => {
        return (
          <div className={titleClass} key={index}>
            <h3>{item.subtitle}</h3>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        );
      })}
    </>
  );
};

// Type of props

Title.propTypes = {
  list: types.array.isRequired,
};
