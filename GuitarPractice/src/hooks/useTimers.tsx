import { useEffect, useState } from "react";

interface TimerReturn {
    resetAndStart: () => void,
    pause: () => void,
    unPause: () => void,
    countDownDisplay: (minutes: number) => string,
    totalPracticeTime: () => string,
    curTime: number
    running: boolean
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

            let i = setInterval(() => {
                setCurTime(timeToAdd + (new Date().getTime() - startTime))
            }, 250)
            setIntervalT(i);
        }

    }, [timerRunning, startTime])

    const resetAndStart = () => {
        setTimeToAdd(0);
        setStartTime(new Date().getTime())
        setCurTime(0);
        setTimerRunning(true);
    }

    const pause = () => {
        setTimerRunning(false);
        setTimeToAdd(curTime);
    }

    const unPause = () => {
        setStartTime(new Date().getTime());
        setTimerRunning(true);
    }

    const countDownDisplay = (minutes: number): string => {
        if (curTime > (minutes * 1000 * 60)) {
            //Gone past timer
            const extra = curTime - (minutes * 1000 * 60)
            const minutesLeft = Math.floor((extra % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((extra % (1000 * 60)) / 1000);

            return `Timer Finish - You have done an extra ${minutesLeft} minutes ${secondsLeft} seconds`
        }
        const remaining = (minutes * 1000 * 60) - curTime;
        const minutesLeft = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((remaining % (1000 * 60)) / 1000);

        return `${minutesLeft} minutes ${secondsLeft} remaining`;

    }

    const totalPracticeTime = (): string => {
        const m = Math.floor((curTime % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((curTime % (1000 * 60)) / 1000);
        return `${m} minutes ${s} seconds`
    }



    return { resetAndStart, pause, unPause, countDownDisplay, totalPracticeTime, running: timerRunning, curTime };
}

