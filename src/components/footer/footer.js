import './footer.css';
import VK from '../../images/logoVK.svg';
import INST from '../../images/logoINST.svg';

function footer() {
  return (
    <div className="footer">
      <div className="footer__content">
         <p className="creators">© 2021. Роман Евгеньевич и Иван Юрьевич</p>
         <a href="https://vk.com/id84743561" target="_blank" rel="noreferrer"><img alt="vk" src={VK} className="logo__vk"/></a>
         <img alt="instagram" src={INST} className="logo__instagram"/>
    </div>
    </div>
  );
}

export default footer;