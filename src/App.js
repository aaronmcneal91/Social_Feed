import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryform';

function App() {

const[entries, setEntries] = useState([{}])

function addNewEntry(entry){
  let tempEntries = [...entries, entry];
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

