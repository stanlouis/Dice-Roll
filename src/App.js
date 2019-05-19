import React from 'react';
import './App.css';
import Die from './components/Die';

function App() {
  return (
    <div className="App">
      <Die face="five" />
      <Die face="four" />
      <Die face="three" />
    </div>
  );
}

export default App;
