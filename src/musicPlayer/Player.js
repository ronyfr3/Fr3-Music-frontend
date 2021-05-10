import React, { useState, useRef, useEffect } from "react";
import PlayerControls from "./PlayerControls";

function Player({ filePath, song }) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  return (
    <div className="music-player">
      <audio src={filePath} ref={audioElement}></audio>
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        // SkipSong={SkipSong}
        audioElement={audioElement}
      />
    </div>
  );
}
export default Player;
