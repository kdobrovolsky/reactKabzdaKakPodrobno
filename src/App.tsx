import { Accordion } from "./components/accordion/Accordion";
import { OnOff } from './components/onOff/OnOff';
import { Rating } from "./components/rating/Rating";
import "./App.css";
import { useState } from "react";
import { UnControlledAccordion } from "./components/accordion/UnControlledAccordion";
import { UnControlledRating } from "./components/rating/UnControlledRating";

export const App = () => {
  

  
  return (
    <div>
      {/* <AppTitle title="This is APP component"/> */}
      <Rating value={3} />
      {/* <Accordion title="Menu" collapsed={true} />
      <Accordion title="Users" collapsed={false} /> */}
      <UnControlledAccordion title="This is APP comp"/>
      <UnControlledRating/>

      <OnOff/>
      <OnOff/>
      
    </div>
  );
};


export type AppTitlePropsType = {
  title: string
}

export const AppTitle = ({title}:AppTitlePropsType) => {
  return <h3>{title}</h3>;
};






