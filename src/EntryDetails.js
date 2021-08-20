import { useLocation } from 'react-router-dom';

function EntryDetails() {
    const location = useLocation()

   console.log(location)
  
    return (
      <div>
        <p>entry</p>
      </div>
    );
  }
  
  export default EntryDetails;