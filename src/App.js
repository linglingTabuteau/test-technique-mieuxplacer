import React from 'react';
import './App.css';
import DropDownList from './DropDownList/DropDownList';

let list = ["item 1", "item 2", "item 3", "item 4"];
function App() {
  return (
    <div className="App">
      <DropDownList
        items={list}
        placeholder="Choose an item"
        onSelectItem={(item) => alert(item)} />
    </div>
  );
}

export default App;
