import React from 'react';

// Components

import { Button } from '../../Button';

// Styles

import './styles.scss';

//-------------

export const TripsItem = props => {
  const { list } = props;

  return (
    <div className="trip">
      {list.map((item, index) => {
        return (
          <div className="trip__item-wrapper" key={index}>
            <a href="#">
              <div
                style={{ backgroundImage: `url(${item.img})` }}
                className="trip__item"
              >
                <Button
                  className="trip__btn"
                  color="brawn"
                  size="sm"
                  variant="contained"
                >
                  <span>&#36;{item.price}</span>
                </Button>

                <p>{item.title}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
