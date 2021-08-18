import Entry from './Entry.js'

function EntryList({ entries }) {
    const entriesArr = entries.map( entry => {
        return <Entry key={entry.id} entry={entry} />
    })
  
    return (
      <div>
        {entriesArr}
      </div>
    );
  }
  
  export default EntryList;