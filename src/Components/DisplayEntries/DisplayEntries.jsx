const DisplayEntries = (props) => {
    return (  
        <table>
        <thead>
          <tr>
          <header>
            <h1>SocialFeed</h1>
          </header>
            
            
          </tr>     
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) => {
            return(
            <tr>
              
              <td>{entry.name}</td>
              <td>{entry.post}</td>
              <td>{entry.date}</td>

            </tr>
          );
        })} 
          </tbody>
      </table>


    );
}
 
export default DisplayEntries;