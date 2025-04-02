import React, { useRef } from 'react';
import './Work.css';
import ExpCard from './ExpCard/ExpCard';
import { WORK_EXPERIENCE } from '../../utils/data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Work = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };



  return (
    <section className="exp-container">
      <h5>Work Experience</h5>
      <div className="exp-content">
        <div className='arrow-right' onClick={slideRight}>
            <span className='material-symbols-outlined'>
                l
            </span>
        </div>
        <div className='arrow-left' onClick={slideLeft}>
            <span className='material-symbols-outlined'>
                r
            </span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExpCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Work;
