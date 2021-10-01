import React, { useRef, useEffect } from 'react';
import useCanvas from './useCanvas'

function Canvas({ currentEntry, draw, options }) {
    const canvasRef = useRef(null)
    // const { context, ...moreConfig } = options
    // const canvasRef = useCanvas(draw, { context })

    // const draw = (ctx, frameCount) => {
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //     ctx.fillStyle = '#000000'
    //     ctx.beginPath()
    //     ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    //     ctx.fill()
    // }

    // useEffect(() => {
    //     const canvas = canvasRef.current
    //     const context = canvas.getContext('2d')
    //     let frameCount = 0
    //     let animationFrameId

    //     const render = () => {
    //         frameCount++
    //         draw(context, frameCount)
    //         animationFrameId = window.requestAnimationFrame(render)
    //     }

    //     render()

    //     return () => {
    //         window.cancelAnimationFrame(animationFrameId)
    //     }
        
    // }, [draw])

  
    return (
      <div>
        <h1 className="entryDetailHeader">{currentEntry.name}</h1>
        <p className="entryDetailContent">{currentEntry.content}</p>
        <canvas 
            ref={canvasRef} 
            currentEntry={currentEntry}
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