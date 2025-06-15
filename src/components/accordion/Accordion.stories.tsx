import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from '@storybook/test'
 
import { Accordion } from "./Accordion";
import { useState } from "react";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  args:{
    onClick: fn()
  }
};


export default meta;


export const CollapsedAccordion = () => {
  return <Accordion title={"Collapsed Accordion"} collapsed={false} onClick={() => {}} />;
};

export const OpenedAccordion = () => {
  return <Accordion title={"Opened Accordion"} collapsed={true} onClick={() => {}} />;
};

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return <Accordion title={"Accordion"} collapsed={collapsed} onClick={()=>setCollapsed(!collapsed)} />;
};



