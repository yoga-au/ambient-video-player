import { useRef, useState } from "react";
import {
  videoStyle,
  appContainer,
  canvasStyle,
  container,
  buttonStyle,
  buttonContainer,
  heading,
} from "./styles/app.css";

function App() {
  const [videoUrl, setVideoUrl] = useState(
    "https://joy.videvo.net/videvo_files/video/free/2019-01/large_watermarked/181015_13_Venice%20Beach%20Drone_25_preview.mp4"
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const EXAMPLE_BTN = [
    {
      label: "Example 1",
      url: "https://joy.videvo.net/videvo_files/video/free/2019-01/large_watermarked/181015_13_Venice%20Beach%20Drone_25_preview.mp4",
    },
    {
      label: "Example 2",
      url: "https://joy.videvo.net/videvo_files/video/free/2016-11/large_watermarked/Smoke_Dark_11_Videvo_preview.mp4",
    },
    {
      label: "Example 3",
      url: "https://wedistill.io/uploads/videos/processed/1007/2015-03-29-01.mp4.mp4",
    },
  ];

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
              {data.label.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
