import React from 'react';
import {connect} from 'react-redux';
import { Route} from 'react-router-dom';
import Login from './screens/Login/Login';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './screens/Profile/Profile';
import Main from './screens/Main/Main';
import News from './screens/News/News';
import style from './App.module.css';



function App(props) {
  return (
    <main className='app'>
      <Header/>
      <section className={style.content}>
        <Navbar/>
        <Route path='/login' render={() => <Login/>}/>
        <Route path='/profile' render={() => <Profile/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/' exact render={() => <Main/>}/>
      </section>
    </main>

  );
}

export default App;


//TODO: add PropTypes
//TODO: showing user or guest on header
//TODO: wrap for content block
//TODO: refactoring

