import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Routers from "./Router/Routers";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routers />
    </div>
  );
}

export default App;
