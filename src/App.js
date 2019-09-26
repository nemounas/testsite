import React from 'react';
import './App.css';
import Profile from './components/profile/profile.jsx';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx';
import Dialog from './components/dialog/dialog';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import { Route, BrowserRouter } from 'react-router-dom';
import Frends from './components/frends/frends'

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App-wraper">
        <Header />
        <Nav />

        <div className="App-wraper-content">
          <Route path="/Profile" render={() => <Profile mes={props.state.ProfilePage} />} />
          <Route path="/dialog" render={() => <Dialog state={props.state.DialogPage} />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>

        <Frends state={props.state} />

      </div>
    </BrowserRouter>
  );
}

export default App;
