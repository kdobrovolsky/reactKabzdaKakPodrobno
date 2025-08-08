import {useEffect, useState} from "react";

type PropsType = {

}
const  get2digitsString = (num: number) => num < 10 ? '0' + num: num
export const Clock = () => {
    const [date,setDate] = useState(new Date())

    useEffect(() => {

    const IntervalId = setInterval(()=> {setDate(new Date())},1000)
        return () => {
        clearInterval(IntervalId)
        }
    },[])

    const secondsString = get2digitsString(date.getSeconds())
    const minutesString = get2digitsString(date.getMinutes())
    const hoursesString = get2digitsString(date.getHours())

    return <div>
        <span>{hoursesString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>


}