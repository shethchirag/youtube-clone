import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img src={video?.thumbnails[0].url} />
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
