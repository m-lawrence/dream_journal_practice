import React, { useRef, useEffect } from 'react';

function Canvas({ currentEntry }) {
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }, [])
  
    return (
      <div>
        <h1 className="entryDetailHeader">{currentEntry.name}</h1>
        <p className="entryDetailContent">{currentEntry.content}</p>
        <canvas 
            ref={canvasRef}
            id="test-canvas-1" 
            width="300" 
            height="200" 
            // onClick={e => {
            //     const canvas = canvasRef.current
            //     const ctx = canvas.getContext('2d')
            //     }}
                />
      </div>
    );
  }
  
  export default Canvas;