import EntryList from "./EntryList"

function DreamJournal({ dream_journals, entries }) {
    const journalName = dream_journals[0].name
  
    return (
      <div>
        <h2>{journalName}</h2>
        <EntryList entries={entries} />
      </div>
    );
  }
  
  export default DreamJournal;