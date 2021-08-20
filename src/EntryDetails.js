import { useLocation } from 'react-router-dom';

function EntryDetails() {
    const location = useLocation()
   console.log(location.state.params)
  
    return (
      <div>
        Entryyy
      </div>
    );
  }
  
  export default EntryDetails;