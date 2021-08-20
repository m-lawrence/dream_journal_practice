import Entry from './Entry.js'
import { useState } from 'react'
import moment from 'moment'

function EntryList({ entries }) {
    const [newEntryClicked, setNewEntryClicked] = useState(false)
    const [formdata, setFormData] = useState({
        date: "",
        name: "",
        content: ""
    })

    const entriesSortedByDate = entries.sort((a,b) => Date.parse(a.date) - Date.parse(b.date))
    const entriesArr = entriesSortedByDate.map( entry => {
        return <Entry key={entry.id} entry={entry} />
    })

     
    function handleNewEntryCLick() {
        setNewEntryClicked(newEntryClicked => !newEntryClicked)
    }

    function handleChange(e) {
        setFormData({...formdata, [e.target.name]: e.target.value})
    }
  
    return (
      <div>
        {entriesArr}
        <ul>
            <li onClick={handleNewEntryCLick}>New Entry</li>
        </ul>
        {newEntryClicked && 
        <form>
            <label>Date: </label>
            <input type="date" name="date" value={formdata.date} onChange={handleChange}></input><br></br><br></br>
            <label>Name: </label>
            <input type="text" name="name" value={formdata.name} onChange={handleChange}></input><br></br><br></br>
            <label>Content: </label>
            <input type="textarea" name="content" value={formdata.content} onChange={handleChange}></input>
            </form>}
      </div>
    );
  }
  
  export default EntryList;