import './header.css';
import Logo from '../../images/logo.svg';
import Support from '../../images/support.svg';

function header() {
  return (
     <>
     <div className="header">
       <img alt="logo" src={Logo} className="logo" />
       <p className="main">Главная</p>
       <p className="portfolio">Активности</p>
       <img alt="support" src={Support} className="support"/>
     </div>
     </>
  );
}

export default header;