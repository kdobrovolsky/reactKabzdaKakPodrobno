import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle";

type  AccordionPropsType = {
  title: string
  collapsed: boolean
}

export const Accordion = ({title,collapsed}:AccordionPropsType) => {
  
    return  <div>
    <AccordionTitle title={title}/>
    {!collapsed && <AccordionBody />}
  </div>
  
  };