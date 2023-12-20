import { useState, useEffect } from "react";

interface CounterProps {
  maxCount: number;
}

const Counter = ({ maxCount }: CounterProps) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    setCurrentCount(0); // everytime component re-renders (due to maxCount updating) we set back currentCount to 0
  }, [maxCount]);

  useEffect(() => {
    let intervalId: number | undefined = undefined;

    const updateCount = () => {
      if (currentCount < maxCount) {
        setCurrentCount((prevState) => prevState + 1);
      } else {
        clearInterval(intervalId);
      }
    };
    intervalId = setInterval(updateCount, 100);

    return () => clearInterval(intervalId); //on component unmount clear Interval
  }, [currentCount, maxCount]);

  return <>{currentCount}</>;
};

export default Counter;
