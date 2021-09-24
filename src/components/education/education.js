/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import './education.css';
import React from "react";
import Slider from 'react-slick';
import Card from '../card/card.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


function Education(props) {


    const initialCards = [{
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'

  },

  {
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'

  },

  {
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'

  },

  {
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'

  },

  {
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'

  },

  {
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'

  }

];


const ArrowLeft = (props) => (
  <button
      {...props}
      className={'slider-prev'}/>
);
const ArrowRight = (props) => (
  <button
      {...props}
      className={'slider-next'}/>
);


let settings = {
  dot: true,
  arrows: true,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
}


  return (
    <div className="education">
      <div className="education__container">
          <p className="education__name">Дипломы</p>

          <div className="slider">
            <Slider className="slider__container" {...settings}>
              {initialCards.map((i) => {
                return <Card key={i.name} card={ {...i} }  onCardClick={props.onCardClick}/>
              })
              }
            </Slider>
          </div>
      </div>
    </div>
  );
}

export default Education;