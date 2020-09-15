import React from 'react';

// Modules

import { Link } from 'react-scroll';
import types from 'prop-types';

// Styles

import './styles.scss';

//----------------

export const Navbar = props => {
  const { list } = props;

  return (
    <nav className="navbar">
      {list.map((item, index) => {
        return (
          <Link
            activeClass="navbar__item--active"
            className="navbar__item"
            isDynamic={true}
            duration={500}
            smooth={true}
            offset={-102}
            spy={true}
            to={item.to}
            key={index}
          >
            <span key={index} href={`#${item.to}`} className="navbar__item">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

// Type of props

Navbar.propTypes = {
  list: types.array.isRequired,
};
