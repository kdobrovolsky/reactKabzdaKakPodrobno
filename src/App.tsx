import { UnControlledOnOff } from "./components/onOff/UnControlledOnOff";
import "./App.css";
import { UnControlledAccordion } from "./components/accordion/UnControlledAccordion";
import { UnControlledRating } from "./components/rating/UnControlledRating";
import { useState } from "react";
import { Accordion } from "./components/accordion/Accordion";
import { Rating, RatingValueType } from "./components/rating/Rating";
import { OnOff } from "./components/onOff/OnOff";
import { UnControlledInput } from "./components/input/UnControlledInput";
import { ControlledInput } from "./components/input/ControlledInput";
import { ControlledCheckBox } from "./components/input/ControlledCheckBox";
import { ControlledSelect } from "./components/input/ControlledSelect";

export const App = () => {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [onOff, setOnOff] = useState<boolean>(true);

  return (
    <div className="App">
      {/* <UnControlledOnOff />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion
        title={"12123"}
        collapsed={accordionCollapsed}
        onClick={setAccordionCollapsed}
      />
      <UnControlledAccordion title="This is APP comp" />
      <UnControlledRating />
      <OnOff onOff={onOff} onClick={setOnOff} /> */}

      <ControlledInput/>
      <UnControlledInput/>
      <ControlledCheckBox/>
      <ControlledSelect/>
    </div>
  );
};





export type AppTitlePropsType = {
  title: string;
};

export const AppTitle = ({ title }: AppTitlePropsType) => {
  return <h3>{title}</h3>;
};
