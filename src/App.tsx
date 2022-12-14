import { useRef, useState } from "react";
import {
  videoStyle,
  appContainer,
  canvasStyle,
  container,
  buttonStyle,
  buttonContainer,
  heading,
  buttonText,
} from "./styles/app.css";
import { EXAMPLE_BTN } from "./utils/constant";

function App() {
  const [videoUrl, setVideoUrl] = useState(
    "https://joy.videvo.net/videvo_files/video/free/2019-01/large_watermarked/181015_13_Venice%20Beach%20Drone_25_preview.mp4"
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className={appContainer}>
      <h1 className={heading}>AMBIENT VIDEO PLAYER</h1>
      <div className={container}>
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
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
        <canvas ref={canvasRef} className={canvasStyle} />
      </div>
      <div className={buttonContainer}>
        {EXAMPLE_BTN.map((data, idx) => {
          return (
            <button
              key={idx}
              className={buttonStyle}
              onClick={() => {
                setVideoUrl(data.url);
              }}
            >
              <p className={buttonText}>{data.label.toUpperCase()}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
