import './aboutMe.css';
import avatar from '../../images/avatar.svg';


function aboutMe() {
  return (
      <div className="aboutMe">
      <div className="me">
        <img alt="avatar" src={avatar} className="avatar" />
        <p className="name">Маргарита</p>
        <p className="surname">Степанова</p>
        <p className="about">Учитель биологии и химии</p>
        <div className="line"></div>
      </div>
      <div className="portfolio__me">
          <p className="greeting">Здравствуйте!</p>
          <div className="link">
            <div className="link__me">
               <p className="link__name">Образование</p>
            </div>
            <div className="link__me">
            <p className="link__name">Деятельность</p>
            </div>
          </div>
          <p className="portfolio__me-text">по специальности «Биология»
с дополнительной специальностью «Химия» Работаю по специальности с 2000г.
С 2017 года работаю учителем в «МБОУ Средняя общеобразовательная школа им. А. Невского» Курского района.</p>
      </div>
      </div>
  );
}

export default aboutMe;
