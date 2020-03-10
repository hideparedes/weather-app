import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Forecast from './components/forecast/Forecast';



function App() {
  return (
    <div className="App">
      <Header />

      <Forecast />
    </div>
  );
}

export default App;
