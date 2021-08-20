import './index.css';
import { users, dream_journals, entries } from './data.js';
import User from './User';
import DreamJournal from './DreamJournal';
import { Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/profile'>
          <User users={users} />
          <DreamJournal dream_journals={dream_journals} entries={entries}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
