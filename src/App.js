import React from 'react';
import './App.css';
import Content from './components/content/content.jsx';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx';
import Dialog from './components/dialog/dialog';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import {Route,BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App-wraper">
      <Header />
      <Nav />
     
     <div className="App-wraper-content">
       <Route path="/Profile" component={Content}/>
       <Route path="/dialog" component={Dialog}/>
       <Route path="/music" component={Music}/>
       <Route path="/news" component={News}/>
       <Route path="/settings" component={Settings}/>
      </div> 
    </div>
    </BrowserRouter>
  );
}

export default App;
