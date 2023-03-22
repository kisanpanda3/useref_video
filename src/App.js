import "./styles.css";
import { useRef } from "react";
export default function App() {
  const ref = useRef(null);

  const onPlay = () => {
    ref.current.play();
  };
  const onPause = () => {
    ref.current.pause();
  };
  return (
    <div className="App">
      <h1>Video</h1>
      <video ref={ref} controls width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/webm"
        />
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <button onClick={onPlay}>PLAY</button>
        <button onClick={onPause}>PAUSE</button>
      </div>
    </div>
  );
}
