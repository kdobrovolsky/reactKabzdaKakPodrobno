import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle";



type AccordionPropsType = {
  title: string;
  collapsed: boolean;
  onClick: (collapsed: boolean) => void
};

export const Accordion = ({ title, collapsed,onClick }: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={title} onClick={()=>onClick(!collapsed)}/>
      {!collapsed && <AccordionBody />}
    </div>
  );
};
