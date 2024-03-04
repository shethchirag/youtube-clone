import moment from "moment";
import React from "react";

function VideoLength({ time }) {
  const VideoLengthInSeconds = moment()
    .startOf("day")
    .second(time)
    .format("H:mm:ss");

  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {VideoLengthInSeconds}
    </div>
  );
}

export default VideoLength;
