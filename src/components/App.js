import './App.css';
import Header from './header/header';
import {  Route, Switch,Redirect, withRouter } from 'react-router-dom';
import AboutMe from './about me/aboutMe';
import ImagePopup from './ImagePopup/ImagePopup.js';
import { useState } from 'react';
import Footer from './footer/footer';
import Education from './education/education';

function App(props) {
  const [isImagePopupOpen, setisImagePopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState(null);

  function closeAllPopups(){
    setisImagePopupOpen(false);
    setselectedCard(null);
}

  function btnToMain() {
    props.history.push('/education');
  }

  function handleCardClick(link){
    setisImagePopupOpen(true)
    setselectedCard({ link})
}

  return (
    <div className="App">
         <Header/>
         <Switch>


         <Route exact path="/project">
           <Redirect to="/main" />
           </Route>

           <Route exact path="/">
           <Redirect to="/main" />
           </Route>

           <Route exact path="/main">
           <AboutMe btnToMain={btnToMain}/>
           </Route>

           <Route exact path="/education">
             <Education onCardClick={handleCardClick}/>
           </Route>

         </Switch>
         <Footer />

         <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default withRouter(App);
