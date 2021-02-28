import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

import BigCard from './components/BigCard/BigCard';
import Cards from './components/Cards/Cards';
import ModalContent from './components/ModalContent/ModalContent';


Modal.setAppElement('#root')

const App = () => {

  // the state to handle the theme mode option
  const [ theme, setTheme ] = useState('dark')

  // function to change the theme
  const toogleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');

    if (document.body.classList.contains('dark')) {
      document.body.classList.replace('dark','ligth');
    } else {
      document.body.classList.replace('ligth','dark');
    }
    
  }

  // MODAL
  const [modalOpen, setModalOpen] = useState(false);
   
  const handlerModalOpen = (e) => {
      setModalOpen(true)
  }

  const closeModal = () => {
      setModalOpen(false)
  }

  return (
    <div className={`App ${theme}`}>

      <div className="bg-top"></div>
      
      <div className="main--container">
        <header>
          <div className="header__title">
            <h1>Social Media Dashboard</h1 >
            <p className="header__subtitle">Total Followers: 23,004</p>
          </div>
          <div className="header__toggle-switch" >
            <label>Dark Mode</label>
            <input type="checkbox" role="checkbox" onClick={toogleTheme} tabIndex="0"/>
          </div>
        </header>

        <section>
          <div className="big-cards--container">
            <BigCard handlerModalOpen={handlerModalOpen} border="facebook" iconSocial="./images/icon-facebook.svg" username="@nathanf" followersNum="1987" followersType="Followers" statsNum="12" statsValue="up"/>
            <BigCard handlerModalOpen={handlerModalOpen} border="twitter" iconSocial="./images/icon-twitter.svg" username="@nathanf" followersNum="1044" followersType="Followers" statsNum="99" statsValue="up"/>
            <BigCard handlerModalOpen={handlerModalOpen} border="instagram" iconSocial="./images/icon-instagram.svg" username="@realnathanf" followersNum="11k" followersType="Followers" statsNum="1099" statsValue="up"/>
            <BigCard handlerModalOpen={handlerModalOpen} border="youtube" iconSocial="./images/icon-youtube.svg" username="Nathan F." followersNum="8239" followersType="Subscribers" statsNum="144" statsValue="down"/>
          </div>

          <h2 className="section__title">
            Overview - Today
          </h2>

          <div className="cards--container">
            <Cards title="Page Views" iconSocial="./images/icon-facebook.svg" number="87" statsNum="3" statsValue="up"/>
            <Cards title="Likes" iconSocial="./images/icon-facebook.svg" number="52" statsNum="2" statsValue="down"/>
            <Cards title="Likes" iconSocial="./images/icon-instagram.svg" number="5462" statsNum="2257" statsValue="up"/>
            <Cards title="Profile Views" iconSocial="./images/icon-instagram.svg" number="52k" statsNum="1375" statsValue="up"/>
            <Cards title="Retweets" iconSocial="./images/icon-twitter.svg" number="117" statsNum="303" statsValue="up"/>
            <Cards title="Likes" iconSocial="./images/icon-twitter.svg" number="507" statsNum="553" statsValue="up"/>
            <Cards title="Likes" iconSocial="./images/icon-youtube.svg" number="107" statsNum="19" statsValue="down"/>
            <Cards title="Total Views" iconSocial="./images/icon-youtube.svg" number="1407" statsNum="12" statsValue="down"/>
          </div>

          <Modal 
            isOpen={modalOpen}
            onRequestClose={closeModal}
            className="modal-reset"
            overlayClassName='modal-overlay'
            >
              <button onClick={closeModal}><img src="./images/icon-close.svg" alt="icon close modal" width="24" height="24"/></button>
              <ModalContent/>
          </Modal>

        </section>

      </div>
    </div>
  );
}

export default App;
