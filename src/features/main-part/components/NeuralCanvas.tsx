import React, { forwardRef } from "react";

type NeuralCanvasProps = React.ComponentPropsWithoutRef<"canvas">;

// Lightweight forwardRef wrapper so the parent can draw animated waves.
const NeuralCanvas = forwardRef<HTMLCanvasElement, NeuralCanvasProps>(
  (props, ref) => {
    return <canvas ref={ref} {...props} />;
  }
);

NeuralCanvas.displayName = "NeuralCanvas";

export default NeuralCanvas;
