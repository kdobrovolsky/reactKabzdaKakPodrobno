import "./App.css";
import { useState } from "react";
import { Accordion } from "./components/accordion/Accordion";
import { UnControlledInput } from "./components/input/UnControlledInput";
import { ControlledInput } from "./components/input/ControlledInput";
import { ControlledCheckBox } from "./components/input/ControlledCheckBox";
import { ControlledSelect } from "./components/input/ControlledSelect";
import { Select } from "./components/Select/Select";

export const App = () => {
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

  return (
    <div className="App">
      <Accordion
        title={"Menu"}
        collapsed={accordionCollapsed}
        onChange={setAccordionCollapsed}
        items={[
          { title: "Kirill", value: 1, onClick: () => console.log(1) },
          { title: "Artem", value: 2, onClick: () => console.log(2) },
          { title: "Viktor", value: 3, onClick: () => console.log(3) },
        ]}
        onClick={(id) => {
          console.log(`Some item was clicked ${id}`);
        }}
      />

      <ControlledInput />
      <UnControlledInput />
      <ControlledCheckBox />
      <ControlledSelect />
   
    </div>
  );
};

export type AppTitlePropsType = {
  title: string;
};

export const AppTitle = ({ title }: AppTitlePropsType) => {
  return <h3>{title}</h3>;
};
