import Entry from './Entry.js'
import { useState } from 'react'
import moment from 'moment'

function EntryList({ entries }) {
    const [newEntryClicked, setNewEntryClicked] = useState(false)
    const [formData, setFormData] = useState({
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
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        const newDream = {
            date: formData.date,
            name: formData.name,
            content: formData.content,
            id: entries.length
        }

        entries.push(newDream)
        setFormData({
            date: "",
            name: "",
            content: ""
        })
    }
  
    return (
      <div>
        {entriesArr}
        <ul>
            <li onClick={handleNewEntryCLick}>New Entry</li>
        </ul>
        {newEntryClicked && 
        <form onSubmit={handleSubmit}>
            <label>Date: </label>
            <input type="date" name="date" value={formData.date} onChange={handleChange}></input><br></br><br></br>
            <label>Name: </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}></input><br></br><br></br>
            <label>Content: </label>
            <input type="textarea" name="content" value={formData.content} onChange={handleChange}></input>
            <input type="submit"></input>
            </form>}
      </div>
    );
  }
  
  export default EntryList;