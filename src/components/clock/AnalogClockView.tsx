import {ClockViewPropsType} from "./DigitalClockView.tsx";
import './AnanlogClockView.module.css'

export const AnalogClockView = ({ data }: ClockViewPropsType) => {
    const seconds = data.getSeconds();
    const minutes = data.getMinutes();
    const hours = data.getHours() % 12;

    const secondsDegrees = seconds * 6;
    const minutesDegrees = minutes * 6 + seconds * 0.1;
    const hoursDegrees = hours * 30 + minutes * 0.5;

    return (
        <div className="analog-clock">
            <div className="dial hours" style={{ transform: `rotate(${hoursDegrees}deg)` }} />
            <div className="dial minutes" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
            <div className="dial seconds" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
        </div>
    );
}