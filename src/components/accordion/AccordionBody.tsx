import { ItemType } from "./Accordion";

export type AccordionBodyPropsType ={
  items: ItemType[]
  onClick: (value: any) => void
}

export const AccordionBody = ({items ,onClick}:AccordionBodyPropsType) => {
    return (
      <div>
        <ul>
          {items.map((t, index )=><li onClick={()=>onClick(t.value)} key={index}>{t.title}</li> ) } 
         
        </ul>
      </div>
    );
  };
  