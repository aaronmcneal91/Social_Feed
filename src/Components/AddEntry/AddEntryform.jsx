import React, { useState } from 'react';




const AddEntryForm = (props) => {

    const [name, setName] = useState('');
    
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name:name,
            post:post,
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
      
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label for="fname">Name</label>
            <input type ='text' id='fname' onChange={(event) => setName (event.target.value)}  /><br></br>
            {/* <label>Post</label>
            <textarea></textarea><br></br> */}
            <label>Post</label>
            <input value={post}  onChange={(event) =>setPost(event.target.value)}  /> <br></br>
            <button type='submit'>CREATE</button>
        
        </form>

     );



}
 
export default AddEntryForm;