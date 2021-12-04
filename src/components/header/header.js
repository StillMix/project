import './header.css';
import Logo from '../../images/logo.svg';
import Support from '../../images/support.svg';

function header(props) {
  return (
     <>
     <div className="header">
       <img alt="logo" src={Logo} className="logo" />
       <p className="main" onClick={props.btnToMain}>Главная</p>
       <p className="portfolio" onClick={props.btnToActivity}>Активности</p>
       <img alt="support" src={Support} className="support"/>
     </div>
     </>
  );
}

export default header;