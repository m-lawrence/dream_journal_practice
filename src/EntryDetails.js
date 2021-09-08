import { useLocation } from 'react-router-dom';
import React, { useRef } from 'react';
import Canvas from './Canvas';

function EntryDetails() {
   const location = useLocation()

   let currentEntry = location.state.params
  
    return (
      <div>
        {/* <h1 className="entryDetailHeader">{currentEntry.name}</h1>
        <p className="entryDetailContent">{currentEntry.content}</p>
        <canvas id="test-canvas-1" width="300" height="200" /> */}
        <Canvas currentEntry={currentEntry}/>
      </div>
    );
  }
  
  export default EntryDetails;