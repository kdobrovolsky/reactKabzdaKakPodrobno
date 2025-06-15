import { useState } from 'react';
import { AccordionTitle } from './AccordionTitle';
import { AccordionBody } from './AccordionBody';

export type UnControlledAccordionPropsType = {
  title: string
}

export const UnControlledAccordion = ({title,}:UnControlledAccordionPropsType) => {
  
  const [collapsed, setCollapsed] = useState(false)
 return (
  <div >
  <AccordionTitle title={title} onClick={()=>setCollapsed(!collapsed)}/>
  {!collapsed && <AccordionBody />}
  
</div>
 )
};
