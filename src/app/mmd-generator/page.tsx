'use client'
import { useRef, useEffect } from 'react';
import { Engine } from '@babylonjs/core/Engines/engine';
import { BaseRuntime } from '../babylon/baseRuntime';
import { SceneBuilder } from '../babylon/sceneBuilder';

export default function Home() {
  // Use useRef to keep a reference to the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Ensure the canvas is available
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const engine = new Engine(canvas, false, {
        preserveDrawingBuffer: false,
        stencil: false,
        antialias: false,
        alpha: false,
        premultipliedAlpha: false,
        powerPreference: 'high-performance',
        doNotHandleTouchAction: true,
        doNotHandleContextLost: true,
        audioEngine: false,
      }, true);

      BaseRuntime.Create({
        canvas,
        engine,
        sceneBuilder: new SceneBuilder(),
      }).then(runtime => {
        runtime.run();
      });

      // Correctly typed resize handler for TypeScript
      const handleResize = () => {
        engine.resize();
      };

      window.addEventListener('resize', handleResize);

      // Clean up the engine on unmount
      return () => {
        engine.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
