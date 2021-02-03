import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PageContainer from './components/PageContainer';
import WifiPage from './pages/WifiPage';

function App() {
  return (
    <div className="App">
      <PageContainer>
          <Route exact path="/" component={WifiPage}></Route>
      </PageContainer>
    </div>
  );
}

export default App;
