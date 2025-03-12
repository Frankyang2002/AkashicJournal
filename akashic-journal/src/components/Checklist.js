import React, { useState } from "react";
import Bubble from "./Bubble";

const topics = {
  "Classical Mechanics": {
    "Newton's Laws": ["First Law", "Second Law", "Third Law"],
    "Energy & Work": ["Kinetic Energy", "Potential Energy", "Work-Energy Theorem"]
  },
  "Electromagnetism": {
    "Maxwell's Equations": ["Gauss's Law", "Faraday's Law", "Ampère's Law"]
  }
};

const Checklist = () => {
  const [progress, setProgress] = useState({});
  const [zoomedInTopic, setZoomedInTopic] = useState(null);

  const toggleCheck = (item) => {
    setProgress((prev) => {
      const newProgress = { ...prev };
      newProgress[item] = !newProgress[item];
      return newProgress;
    });
  };

  const countChecked = (items) => items.filter((item) => progress[item]).length;

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Object.entries(topics).map(([topic, subtopics]) => (
        <Bubble 
          key={topic} 
          name={topic} 
          progress={countChecked(Object.values(subtopics).flat())} 
          maxProgress={Object.values(subtopics).flat().length} 
          isZoomedIn={zoomedInTopic === topic}
          onClick={() => setZoomedInTopic(zoomedInTopic === topic ? null : topic)}
        >
          {Object.entries(subtopics).map(([subtopic, items]) => (
            <Bubble 
              key={subtopic} 
              name={subtopic} 
              progress={countChecked(items)} 
              maxProgress={items.length}
              isZoomedIn={zoomedInTopic === topic}
            >
              {items.map((item) => (
                <Bubble 
                  key={item} 
                  name={item} 
                  progress={progress[item] ? 1 : 0} 
                  maxProgress={1} 
                  onClick={() => toggleCheck(item)} 
                  isZoomedIn={zoomedInTopic === topic}
                />
              ))}
            </Bubble>
          ))}
        </Bubble>
      ))}
    </div>
  );
};

export default Checklist;