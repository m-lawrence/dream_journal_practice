import { useHistory } from 'react-router-dom';

function Entry({ entry }) {
    const history = useHistory()
    

    function handleEntryClick() {
        history.push(`./entry/${entry.id}`, {params: entry})
    }
  
    return (
      <div>
        <ul className="entryList">
            <li onClick={handleEntryClick}>{entry.name}</li>
        </ul>
      </div>
    );
  }
  
  export default Entry;