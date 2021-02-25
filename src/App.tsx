import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MenuBar from './components/menu';
import PageContainer from './components/PageContainer';
import OtherPage from './pages/otherPage';

function App() {
  return (
      <HashRouter>
        <div className="App">
          <MenuBar />
          <Switch>
            <Route exact path="/wifi" component={PageContainer}></Route>
            <Route path="/other" component={OtherPage}></Route>
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
