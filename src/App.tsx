import { OnOff } from "./components/onOff/OnOff";
import "./App.css";
import { UnControlledAccordion } from "./components/accordion/UnControlledAccordion";
import { UnControlledRating } from "./components/rating/UnControlledRating";
import { useState } from "react";
import { Accordion } from "./components/accordion/Accordion";
import { Rating, RatingValueType } from "./components/rating/Rating";

export const App = () => {
  
  let[ratingValue, setRatingValue] = useState<RatingValueType>(4)
  let[accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

 
  return (
    <div className="App">
      <OnOff />
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion title={"12123"} collapsed={accordionCollapsed} onClick = {setAccordionCollapsed}/>
      {/* <UnControlledAccordion title="This is APP comp" /> */}
      <UnControlledRating/>
    </div>
  );
};
export type AppTitlePropsType = {
  title: string;
};

export const AppTitle = ({ title }: AppTitlePropsType) => {
  return <h3>{title}</h3>;
};
