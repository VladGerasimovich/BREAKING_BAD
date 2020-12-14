import React from 'react';
import s from  './App.module.css';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import Character from './components/Character/Character';
import {Route} from 'react-router-dom';

const App = () => {
  return(
          <div className={s.container}>
              <Header />
              <Route exact path='/' component={Characters}/>
              <Route path='/characters/:char_id' component={Character}/>
          </div>
  )
}

export default App;
