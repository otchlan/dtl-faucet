import { useEffect, useRef } from "react";

const YouTubeVideo = () => {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && playerContainerRef.current) {
      const playerContainer = playerContainerRef.current;

      if (!playerContainer.querySelector("iframe")) {
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://www.youtube.com/embed/afUHo9Gy5Nw?autoplay=1&controls=0&modestbranding=1&loop=1&playlist=afUHo9Gy5Nw&mute=1";
        iframe.allow = "autoplay; encrypted-media";
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true; // Corrected to lower case
        iframe.style.width = "40%"; // Use 100% of the container's width
        iframe.style.height = "300px"; // Use 100% of the container's height for flexibility
        playerContainer.appendChild(iframe);
      }
    }
  }, []);

  return (
    <div
      id="youtube-player-container"
      ref={playerContainerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        alignItems: "center",
        width: "90vw",
        height: "50.625vw", // For a 16:9 aspect ratio based on the width
        maxWidth: "1600px", // Maximum size, adjust as needed
        maxHeight: "400px", // Maximum height based on aspect ratio
      }}
    ></div>
  );
};

export default YouTubeVideo;
