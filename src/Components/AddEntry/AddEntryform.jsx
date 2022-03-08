import React, { useState } from 'react';




const AddEntryForm = (props) => {

    const [name, setName] = useState('')
    
    const [date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name:name,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type ='name' value={''} onChange={(event) => setName (event.target.value)}  />
            <label>Post</label>
            <textarea></textarea>
            <label>Date</label>
            <input type ='date' value={date}  onChange={(event) =>setDate(event.target.value)}  /> 
            <button type='submit'>CREATE</button>
        
        </form>

     );



}
 
export default AddEntryForm;