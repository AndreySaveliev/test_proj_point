import { useState } from "react";

export const useSwipe = (prev, next) => {
  const [start, setStart] = useState(null);

  const handleTouchStart = (e) => {
    setStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    let delta = start - e.changedTouches[0].clientX;
    if (delta > 50 && prev != "") {
      document?.querySelector(prev).scrollIntoView({ behavior: "smooth" });
    }
    if (delta < -50 && next != "") {
      document?.querySelector(next).scrollIntoView({ behavior: "smooth" });
    }
    setStart(null);
  };

  return { handleTouchEnd, handleTouchStart };
};
