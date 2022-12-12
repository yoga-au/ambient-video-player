import { useRef } from "react";
import {
  videoStyle,
  appContainer,
  canvasStyle,
  container,
} from "./styles/app.css";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className={appContainer}>
      <div className={container}>
        <video
          ref={videoRef}
          src="https://wedistill.io/uploads/videos/processed/1007/2015-03-29-01.mp4.mp4"
          controls
          width={640}
          className={videoStyle}
          onTimeUpdate={() => {
            if (canvasRef.current && videoRef.current) {
              const ctx = canvasRef.current.getContext("2d");

              ctx?.drawImage(
                videoRef.current,
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
              );
            }
          }}
        />
        <canvas
          ref={canvasRef}
          width={640}
          height={360}
          className={canvasStyle}
        />
      </div>
    </div>
  );
}

export default App;
