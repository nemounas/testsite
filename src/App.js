import React from 'react';
import './App.css';
import Content from './components/content.jsx';
import Header from './components/header.jsx';
import Nav from './components/nav.jsx';


const App = () => {
  return (
    <div className="App-wraper">
      <Header/>
      <Nav/>
      <Content/>
    </div>
   
  );
}

export default App;
