
"use client";

import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to prevent SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function BlogVideo() {
  return (
    <div className="h-[300px] es:h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] py-10 2xl:h-[750px]">
      <ReactPlayer
        url="/world.mp4"
        playing // Autoplay enabled
        loop // Loop enabled
        controls
        volume={0.8} // Set initial volume to 80%
        muted={false} // Ensure audio isn't muted
        width="100%" // Full-width responsiveness
        height="100%" // Full-height responsiveness
        className="w-full"
      />
    </div>
  );
}
