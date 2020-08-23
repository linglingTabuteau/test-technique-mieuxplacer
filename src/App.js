import React from 'react';
import './App.css';
import DropDownList from './DropDownList/DropDownList';

let list = ["choice 1", "choice 2", "choice 3", "choice 4"];
function App() {
  return (
    <div className="App">
      <DropDownList items={list} onSelectItem ={(item) => alert(item)} />
    </div>
  );
}

export default App;
