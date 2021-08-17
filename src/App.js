import './index.css';
import { users, dream_journals, entries } from './data.js';

function App() {
  
  return (
    <div className="App">
      <h1>Welcome, {users[0].username}!</h1>
      <h2>{dream_journals[0].name}</h2>
      <ul>
        <li>{entries[0].name}</li>
      </ul>
    </div>
  );
}

export default App;
