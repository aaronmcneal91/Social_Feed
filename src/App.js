import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryform';

function App() {

const[entries, setEntries] = useState([{name: 'NAME', post:'POST'}])

function addNewEntry(entry){
  let tempEntries = [...entries,];
  setEntries(tempEntries);
}

  return (
    <div>
    <DisplayEntries parentEntries ={entries}/>
    <AddEntryForm addNewEntryProperty={addNewEntry}/>

    </div>
  );
}

export default App;

