function Entry({ entry }) {

    function handleEntryClick() {
        // route to entry details page
    }
  
    return (
      <div>
        <ul>
            <li onClick={handleEntryClick}>{entry.name}</li>
        </ul>
      </div>
    );
  }
  
  export default Entry;