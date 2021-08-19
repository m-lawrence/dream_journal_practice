import Entry from './Entry.js'
import { useState } from 'react'
import moment from 'moment'

function EntryList({ entries }) {
    const [newEntryClicked, setNewEntryClicked] = useState(false)
    const entriesArr = entries.map( entry => {
        return <Entry key={entry.id} entry={entry} />
    })

    function handleNewEntryCLick() {
        setNewEntryClicked(newEntryClicked => !newEntryClicked)
    }

    const entriesSortedByDate = entries.sort((a,b) => console.log(a.date))

  
    return (
      <div>
        {entriesArr}
        <ul>
            <li onClick={handleNewEntryCLick}>New Entry</li>
        </ul>
        {newEntryClicked && 
        <form>
            <label>Date: </label>
            <input type="date"></input><br></br><br></br>
            <label type="text">Name: </label>
            <input></input><br></br><br></br>
            <label>Content: </label>
            <input type="textarea"></input>
            </form>}
      </div>
    );
  }
  
  export default EntryList;