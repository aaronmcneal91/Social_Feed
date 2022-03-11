import React, { useState } from 'react';
import './AddEntry.css';








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
        <form onSubmit={handleSubmit} className ='form-grid'>
        <form onSubmit={handleSubmit} className= 'container'>
            <div className = 'post'>

                <label for="fname">Name</label>
                <input type ='text' id='fname' placeholder = "What is your name?"  onChange={(event) => setName (event.target.value)}  /><br></br>
                <label>Post</label>
                <input for = 'Post' placeholder = 'What are your thoughts?' value={post}  onChange={(event) =>setPost(event.target.value)}  /> <br></br>
                
                <div className=' like'>
                    <button type= 'like'>Like</button>
                </div>
                <div className=' disike'>
                    <button type= 'Dislike'>Disike</button>
                </div>
                <button type='submit'>CREATE</button>
            </div>

        </form> 
        </form>

     );



}
 
export default AddEntryForm;