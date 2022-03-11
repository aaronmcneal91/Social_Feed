import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryform';

import LikeButton from './Components/Post/Post';



function App() {

const[entries, setEntries] = useState([{name: 'Aaron Mcneal', post:'My Project!'}])

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

