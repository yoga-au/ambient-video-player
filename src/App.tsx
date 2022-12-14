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
  inputStyle,
  formStyle,
  labelStyle,
} from "./styles/app.css";
import { EXAMPLE_BTN } from "./utils/constant";

import type { FormEvent } from "react";

function App() {
  const [videoUrl, setVideoUrl] = useState(
    "https://joy.videvo.net/videvo_files/video/free/2019-01/large_watermarked/181015_13_Venice%20Beach%20Drone_25_preview.mp4"
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tempUrl = useRef("");

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setVideoUrl(tempUrl.current);
  };

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
      <label htmlFor="video-url" className={labelStyle}>
        Video URL
      </label>
      <form className={formStyle} onSubmit={onSubmit}>
        <input
          type="text"
          className={inputStyle}
          id="video-url"
          onChange={(ev) => {
            const value = ev.target.value;
            tempUrl.current = value;
          }}
        />
        <button className={buttonStyle} type="submit">
          <p className={buttonText}>Apply</p>
        </button>
      </form>
    </div>
  );
}

export default App;
