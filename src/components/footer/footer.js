import './footer.css';
import VK from '../../images/logoVK.svg';
import INST from '../../images/logoINST.svg';

function footer() {
  return (
    <div className="footer">
         <p className="creators">© 2021. Роман Евгеньевич и Иван Юрьевич</p>
         <img alt="vk" src={VK} className="logo__vk"/>
         <img alt="instagram" src={INST} className="logo__instagram"/>
    </div>
  );
}

export default footer;