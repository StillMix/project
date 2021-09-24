import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card.link);
  }

return (
  <img className="slider__photo" onClick={handleClick} src={props.card.link} alt="картинка"></img>
);

}

export default Card;