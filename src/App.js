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

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
}

  

 
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/profile'>
          <User users={users} />
          <DreamJournal dream_journals={dream_journals} entries={entries}/>
        </Route>
        <Route exact path='/entry/:id'>
          <EntryDetails draw={draw}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
