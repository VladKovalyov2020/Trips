import React from 'react';

// Modules

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { ReactIcon } from '../../ReactIcon';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import types from 'prop-types';

//Components

import { sliderList } from '../../../constans/index';
import { OurTeamSliderCard } from '../OurTeamSliderCard';

// Styles

import './styles.scss';

// ------------------

const SampleNextArrow = props => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ReactIcon size="xxl">
        <BsChevronRight />
      </ReactIcon>
    </div>
  );
};

const SamplePrevArrow = props => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ReactIcon size="xxl">
        <BsChevronLeft />
      </ReactIcon>
    </div>
  );
};

// ---------------

export class OurTeamSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Slider className="our-team-slider" {...settings}>
        {sliderList.map((item, index) => {
          return (
            <div key={item.id} className="our-team-slider__slide">
              <OurTeamSliderCard
                image={item.img}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                socialLink={item.socialLink}
              />
            </div>
          );
        })}
      </Slider>
    );
  }
}

// Type of props

SampleNextArrow.propTypes = {
  className: types.string,
  onClick: types.func,
};

SamplePrevArrow.propTypes = {
  className: types.string,
  onClick: types.func,
};
