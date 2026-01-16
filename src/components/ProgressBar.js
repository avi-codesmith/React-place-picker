import { useState, useEffect } from "react";

export default function Progress() {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev + 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress className="progress" value={remainingTime} max={3000} />;
}
