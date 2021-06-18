import "./style.css";
import { useState, useEffect } from "react";

export const ShowDateAndTime = () => {
  const [time, setTime] = useState(0);
  const newDate = new Date();
  const currentDate = newDate.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);
};
