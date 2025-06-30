import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle";

export type ItemType = {
  title: string
  value: any
   onClick: () => void
}


type AccordionPropsType = {
  title: string;
  collapsed: boolean;
  onChange: (collapsed: boolean) => void
  items: ItemType[]
  onClick: (value: any) => void
};

export const Accordion = ({ items,title, collapsed,onChange,onClick }: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={title} onClick={()=>onChange(!collapsed)}/>
      {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
    </div>
  );
};
