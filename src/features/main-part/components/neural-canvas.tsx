import React, { forwardRef } from "react";

type NeuralCanvasProps = React.ComponentPropsWithoutRef<"canvas">;

const NeuralCanvas = forwardRef<HTMLCanvasElement, NeuralCanvasProps>(
  (props, ref) => {
    return <canvas ref={ref} {...props} />;
  }
);

NeuralCanvas.displayName = "NeuralCanvas";

export default NeuralCanvas;
