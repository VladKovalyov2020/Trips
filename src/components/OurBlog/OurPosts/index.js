import React from 'react';

// Modules

import types from 'prop-types';

// Styles

import './style.scss';

//-------------

export const OurPosts = props => {
  const { list } = props;

  return (
    <div className="posts">
      {list.map((item, id) => {
        return (
          <div key={id}>
            <div className="posts__item">
              <a href="#">
                <div className="item__picture">
                  <img src={item.img} alt={item.name} />
                </div>
              </a>
              <div className="item__text">
                <a href="#">
                  <h4>{item.title} </h4>
                </a>

                <p>
                  <time>
                    {item.date} by
                    <a>
                      <span> {item.published}</span>
                    </a>
                  </time>
                </p>

                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Type of props

OurPosts.propTypes = {
  list: types.array.isRequired,
};
