import {get2digitsString} from "./Clock.tsx";

export type ClockViewPropsType = {
    data: Date;
}
export const DigitalClockView = ({data}: ClockViewPropsType) => {
    return (
        <>
            <span>{get2digitsString(data.getHours())}</span>
            :
            <span>{get2digitsString(data.getMinutes())}</span>
            :
            <span>{get2digitsString(data.getSeconds())}</span>
        </>
    );
}