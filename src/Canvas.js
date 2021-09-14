import React, { useRef, useEffect } from 'react';

function Canvas({ currentEntry }) {
    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2*Math.PI)
        ctx.fill()
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        // context.fillStyle = '#000000'
        draw(context)
    }, [draw])
  
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