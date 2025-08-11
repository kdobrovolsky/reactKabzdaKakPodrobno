import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView.tsx";
import {AnalogClockView} from "./AnalogClockView.tsx";

type PropsType = {
    mode?: 'analog' | 'digital';
}

export const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

export const Clock = ({ mode = 'digital' }: PropsType) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            {mode === 'digital'
                ? <DigitalClockView data={date} />
                : <AnalogClockView data={date} />
            }
        </div>
    );
}



