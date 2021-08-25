import { useLocation } from 'react-router-dom';

function EntryDetails() {
   const location = useLocation()

   let currentEntry = location.state.params
  
    return (
      <div>
        <h1>{currentEntry.name}</h1>
        <p>{currentEntry.content}</p>
      </div>
    );
  }
  
  export default EntryDetails;