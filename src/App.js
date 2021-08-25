import './index.css';
import { users, dream_journals, entries } from './data.js';
import User from './User';
import DreamJournal from './DreamJournal';
import { Route, Switch } from 'react-router-dom';
import EntryDetails from './EntryDetails';

function App() {

  // function anagram(str1, str2) {
  //   if(str1.length != str2.length) return false;
  //   let first = {}
  //   let second = {}
  //   for(let i=0; i<str1.length; i++) {
  //     if(first[str1[i]]) {
  //       first[str1[i]]++
  //     } else {
  //       first[str1[i]] = 1
  //     }
  //   }
  //   for(let j=0; j<str2.length; j++) {
  //     if(second[str2[j]]) {
  //       second[str2[j]]++
  //     } else {
  //       second[str2[j]] = 1
  //     }
  //   }
  //   for(const key in first) {
  //     if(!first[key] in second) {
  //       return false
  //     }
  //     if(first[key] != second[key]) {
  //       return false
  //     }
  //   }
  //   return true
  // }

 
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/profile'>
          <User users={users} />
          <DreamJournal dream_journals={dream_journals} entries={entries}/>
        </Route>
        <Route exact path='/entry/:id'>
          <EntryDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
