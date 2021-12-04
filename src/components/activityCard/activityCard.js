import './activityCard.css';
import {  NavLink } from 'react-router-dom';
import flask from '../../images/flasks.svg'

function ActivityCard(props) {

  return (
     <>
         <div className="activityCard">
          <div className="activityCard__container">
          <img className="activityCard__image" alt="пробирки" src={flask}/>
          <p className="activityCard__name">{props.name}</p>
          <p className="activityCard__data">{props.data}</p>
          </div>
          <div className="activityCard__btn">
          <NavLink className='activityCard__btn-text' to={'/activity/' + props.id}>Подробнее</NavLink></div>
         </div>
     </>
  );
}

export default ActivityCard;