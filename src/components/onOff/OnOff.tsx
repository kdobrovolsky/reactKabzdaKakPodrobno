import { useState } from "react";
import { Button } from "../Button";

export type OnOffPropsType = {

}

export const OnOff = ({}:OnOffPropsType) => {
     const [onOff, setOnOff]= useState(false)
   
     const buttonClickHandlerTrue = () => {
       return(
         setOnOff(true)
       )
     }

     const buttonClickHandlerFalse = () => {
        return(
          setOnOff(false)
        )
      }
    return (
    <div className="onOff">
      <Button title="On" onClick={buttonClickHandlerTrue} className={onOff === true? "buttonGreen" : 'buttonWhite'}/>
      <Button title="Off" onClick={buttonClickHandlerFalse} className={onOff === false? "buttonRed" : 'buttonWhite'}/> 
      <div className={onOff === true? "controllerGreen" : 'controllerRed' }></div>
    </div>
  );
};
