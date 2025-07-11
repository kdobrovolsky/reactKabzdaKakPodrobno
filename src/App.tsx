import "./App.css";
import { useState } from "react";
import { Accordion } from "./components/accordion/Accordion";
import { UnControlledInput } from "./components/input/UnControlledInput";
import { ControlledInput } from "./components/input/ControlledInput";
import { ControlledCheckBox } from "./components/input/ControlledCheckBox";
import { ControlledSelect } from "./components/input/ControlledSelect";
import { Select } from "./components/Select/Select";
import { UnControlledAccordion } from "./components/accordion/UnControlledAccordion";


export const App = () => {
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

  const [value, setValue] = useState(1)

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
      <UnControlledAccordion title={"eeeeeee"} items={[
          { title: "Kirill", value: 1, onClick: () => console.log(1) },
          { title: "Artem", value: 2, onClick: () => console.log(2) },
          { title: "Viktor", value: 3, onClick: () => console.log(3) },
        ]}/>
      <ControlledInput />
      <UnControlledInput />
      <ControlledCheckBox />
      <Select value={value} onChange={setValue} items={[
        { title: "Moscow", value: 1,  },
        { title: "Minsk", value: 2,  },
        { title: "Kiev", value: 3, },
      ]}/>
    </div>
  );
};

export type AppTitlePropsType = {
  title: string;
};

export const AppTitle = ({ title }: AppTitlePropsType) => {
  return <h3>{title}</h3>;
};
