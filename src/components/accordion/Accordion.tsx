import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle";

type  AccordionPropsType = {
  title: string
  collapsed: boolean
}

export const Accordion = ({title,collapsed}:AccordionPropsType) => {
  if(collapsed){
    return  <div>
    <AccordionTitle title={title}/>
    <AccordionBody />
  </div>
  } else{
    return  <div>
    <AccordionTitle title={title}/>
  </div>
  }
  
  };