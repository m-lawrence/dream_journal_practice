import { useLocation } from 'react-router-dom';
import React, { useRef } from 'react';
import Canvas from './Canvas';

function EntryDetails({ draw }) {
   const location = useLocation()

   let currentEntry = location.state.params

//    const draw = (ctx, frameCount) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//     ctx.fillStyle = '#000000'
//     ctx.beginPath()
//     ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
//     ctx.fill()
// }
  
    return (
      <div>
        {/* <h1 className="entryDetailHeader">{currentEntry.name}</h1>
        <p className="entryDetailContent">{currentEntry.content}</p>
        <canvas id="test-canvas-1" width="300" height="200" /> */}
        <Canvas currentEntry={currentEntry} draw={draw}/>
      </div>
    );
  }
  
  export default EntryDetails;