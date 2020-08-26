import React, { useState } from 'react';
import './App.css';
import DropDownList from './DropDownList/DropDownList';


let list = ["item 1", "item 2", "item 3", "item 4"];
const App = () => {
  return (
    <div
      className="App">
      <DropDownList
        items={list}
        placeholder="Choose an item"
        onSelectItem={(item:string) => alert(item)}
      />
    </div>
  );
}

export default App;
