import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import Main from './Components/Main';
import Header from './Components/Header';
import Downloads from './Components/Downloads';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Route exact path="/" component={Main}/>
      <Route exact path="/downloads" component={Downloads} />
    </HashRouter>
  );
}

export default App;
