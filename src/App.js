import React from 'react';
import './App.css';
import DropDownList from './DropDownList/DropDownList';

let list = ["1", "2", "3"];
function App() {
  return (
    <div className="App">
      <DropDownList items={list} />
    </div>
  );
}

export default App;
