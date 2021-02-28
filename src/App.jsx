import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';

import BigCard from './components/BigCard/BigCard';
import Cards from './components/Cards/Cards';
import ModalContent from './components/ModalContent/ModalContent';


Modal.setAppElement('#root')

const App = () => {

  // the state to handle the theme mode option
  const [ theme, setTheme ] = useState('dark')
  
  // states to save data
  const [dataBigCards, setDataBigCards ] = useState([]);
  const [dataCards, setDataCards ] = useState([]);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);

  // function to get data from data.json
  const getData = async() => {
    const res = await fetch('data.json');
    const data = await res.json()
    setDataBigCards(data.bigCards)
    setDataCards(data.cards)
  }
  useEffect( () => {
    getData()
  }, [])


  // function to change the theme
  const toogleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');

    if (document.body.classList.contains('dark')) {
      document.body.classList.replace('dark','ligth');
    } else {
      document.body.classList.replace('ligth','dark');
    }
    
  }
   
  //"open or close" modal functions
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
            {
              dataBigCards.map( (card, index) => (
                <div>
                  <BigCard key={index}
                    handlerModalOpen={handlerModalOpen}
                    border={card.border}
                    iconSocial={`./images/${card.iconSocial}`}
                    username={card.username}
                    followersNum={card.followersNum}
                    followersType={card.followersType}
                    statsNum={card.statsNum}
                    statsValue={card.statsValue}
                  />
                </div>
              ))
            }
          </div>

          <h2 className="section__title">
            Overview - Today
          </h2>

          <div className="cards--container">
            {
              dataCards.map( (card, index) => (
                <Cards
                  key={index}
                  title={card.title}
                  iconSocial={`./images/${card.iconSocial}`}
                  number={card.number}
                  statsNum={card.statsNum}
                  statsValue={card.statsValue}
                />
              ))
            }
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
