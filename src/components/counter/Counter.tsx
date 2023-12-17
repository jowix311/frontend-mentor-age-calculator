import { useState, useEffect } from "react";

interface CounterProps {
  maxCount: number;
}

const Counter = ({ maxCount }: CounterProps) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let intervalId: number | undefined = undefined;

    const updateCount = () => {
      if (currentCount < maxCount) {
        setCurrentCount((prevCurrentCount) => prevCurrentCount + 1);
      } else {
        clearInterval(intervalId);
      }
    };
    intervalId = setInterval(updateCount, 100);

    return () => clearInterval(intervalId);
  }, [currentCount, maxCount]);

  return <>{currentCount}</>;
};

export default Counter;
