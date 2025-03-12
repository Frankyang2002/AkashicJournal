import React, { useState } from "react";

const Bubble = ({ name, children, progress, maxProgress }) => {
  const [expanded, setExpanded] = useState(false);
  const opacity = 0.3 + (progress / maxProgress) * 0.7; // More complete = more solid
  const size = 50 + (1 - progress / maxProgress) * 100; // More complete = smaller

  return (
    <div
      className="relative flex items-center justify-center rounded-full border-2 border-gray-500 cursor-pointer transition-all duration-300"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        opacity,
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <span className="text-xs text-center">{name} ({progress}/{maxProgress})</span>
      {expanded && <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">{children}</div>}
    </div>
  );
};

export default Bubble;