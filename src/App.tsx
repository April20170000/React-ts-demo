import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import MenuBar from './components/menu';
import PageContainer from './components/PageContainer';

function App() {
  return (
      <HashRouter>
        <div className="App">
          <MenuBar />
          <PageContainer />
        </div>
      </HashRouter>
  );
}

export default App;
