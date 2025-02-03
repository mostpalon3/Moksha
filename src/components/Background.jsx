import React, { useEffect, useState, useRef } from "react";
import { Group } from "./Group";
import bgImage from "../assets/images/bg.jpg";

const Background = ({children}) => {
  const [imageWidth, setImageWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      const viewportHeight = window.innerHeight;
      const aspectRatio = img.width / img.height;
      const calculatedWidth = viewportHeight * aspectRatio;
      setImageWidth(calculatedWidth);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    
    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-x-auto scrollbar-hidden"
    >
      <Group
        className="h-screen overflow-auto scrollbar-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundBlendMode: "screen",
          backgroundSize: `${imageWidth}px 100vh`,
          backgroundPosition: "start",
          backgroundRepeat: "no-repeat",
          width: `${imageWidth}px`,
          minWidth: "100vw",
        }}
      >
        {children}
      </Group>
    </div>
  );
};

export default Background;