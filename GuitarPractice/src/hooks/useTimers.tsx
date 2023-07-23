import { useEffect, useState } from "react";

interface TimerReturn {
  totalSeconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export function useTimer(): TimerReturn {
  const [timeToAdd, setTimeToAdd] = useState(0);
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [curTime, setCurTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const [intervalT, setIntervalT] = useState<number>();

  useEffect(() => {
    clearInterval(intervalT);

    if (timerRunning) {
      let i = window.setInterval(() => {
        setCurTime(timeToAdd + (new Date().getTime() - startTime));
      }, 250);
      setIntervalT(i);
    }
  }, [timerRunning, startTime]);

  const resetAndStart = () => {
    setTimeToAdd(0);
    setStartTime(new Date().getTime());
    setCurTime(0);
    setTimerRunning(true);
  };

  const resetAndPause = () => {
    setTimeToAdd(0);
    setStartTime(new Date().getTime());
    setCurTime(0);
    setTimerRunning(false);
  };

  const pause = () => {
    setTimerRunning(false);
    setTimeToAdd(curTime);
  };

  const unPause = () => {
    setStartTime(new Date().getTime());
    setTimerRunning(true);
  };

  const hours = Math.floor(
    (curTime % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((curTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((curTime % (1000 * 60)) / 1000);

  const totalSeconds = curTime / 1000;

  return {
    totalSeconds,
    hours,
    minutes,
    seconds,
    isRunning: timerRunning,
    start: unPause,
    pause,
    reset: resetAndPause,
  };
}
