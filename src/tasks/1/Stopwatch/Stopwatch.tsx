import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import { getUnits } from "./utils/get-units";

interface IStopwatchProps {}
 

const Stopwatch: React.FC<IStopwatchProps> = () => {
    const timer = useRef<number>();

    const [runningTime, setRunningTime] = useState<number>(0);
    const [status, setStatus] = useState<boolean>(false);

    useEffect(() => {
        if (!status) {
            if(timer.current) {
                clearInterval(timer.current);
            }
        } else {
            const startTime = Date.now() - runningTime;
            timer.current = setInterval(() => {
                setRunningTime(Date.now() - startTime);
            });
        }
        return () => {
            if(timer) {
                clearInterval(timer.current);
            }
        }
    }, [status])

    const handleClick = useCallback(() => {
        setStatus(!status);
    }, [status]);

    const handleReset = useCallback(() => {
        clearInterval(timer.current);
        setStatus(false);
        setRunningTime(0);
    }, [timer]);

    const formattedTime = useMemo(() => getUnits(runningTime), [runningTime]);

    const handleLap = useCallback(() => {
        console.log(formattedTime)
    }, [formattedTime]);


    return (
        <div>
            <p>{formattedTime}</p>
            <button onClick={handleClick}>
                {status ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleLap}>Lap</button>
        </div>
    );

}

export default Stopwatch;
