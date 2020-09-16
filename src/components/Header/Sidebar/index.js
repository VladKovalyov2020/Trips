import React from 'react';

// Modules

import { Link } from 'react-scroll';
import classNames from 'classnames';
import types from 'prop-types';

// Components

import { ReactIcon } from '../../../components/ReactIcon';

// Styles

import './styles.scss';

// ------------------

export const Sidebar = props => {
  const { isOpen, list, handleClick } = props;

  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--open': isOpen,
  });

  return (
    <aside className={sidebarClass}>
      <div className="sidebar__list">
        {list.map((item, index) => {
          return (
            <Link
              activeClass="sidebar__item--active"
              className="sidebar__item"
              onClick={handleClick}
              isDynamic={true}
              duration={500}
              smooth={true}
              to={item.to}
              key={index}
              spy={true}
              offset={0}
            >
              <div key={index} className="sidebar__list-item">
                {item.name}
                <ReactIcon size="xl">{item.icon()}</ReactIcon>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

// Type of props

Sidebar.propTypes = {
  isOpen: types.bool.isRequired,
  list: types.array.isRequired,
};

// Default value for props

Sidebar.defaultProps = {
  isOpen: false,
};
