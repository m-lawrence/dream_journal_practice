import './index.css';
import { users, dream_journals, entries } from './data.js';
import User from './User';
import DreamJournal from './DreamJournal';

function App() {
  
  return (
    <div className="App">
      <User users={users} />
      <DreamJournal dream_journals={dream_journals} entries={entries}/>
    </div>
  );
}

export default App;
