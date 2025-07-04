import { Button } from "../Button";

export type OnOffPropsType = {
  onOff: boolean;
  onClick: (onOff: boolean) => void;
};

export const OnOff = ({ onOff, onClick }: OnOffPropsType) => {
  const buttonClickHandlerTrue = () => {
    return onClick(true);
  };

  const buttonClickHandlerFalse = () => {
    return onClick(false);
  };
  return (
    <div className="onOff">
      <Button
        title="On"
        onClick={buttonClickHandlerTrue}
        className={onOff === true ? "buttonGreen" : "buttonWhite"}
      />
      <Button
        title="Off"
        onClick={buttonClickHandlerFalse}
        className={onOff === false ? "buttonRed" : "buttonWhite"}
      />
      <div
        className={onOff === true ? "controllerGreen" : "controllerRed"}
      ></div>
    </div>
  );
};
