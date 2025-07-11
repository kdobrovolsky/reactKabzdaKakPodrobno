import { useReducer, useState } from 'react';
import { AccordionTitle } from './AccordionTitle';
import { AccordionBody } from './AccordionBody';
import { ItemType } from './Accordion';

export type UnControlledAccordionPropsType = {
  title: string
  items: ItemType[]
}

type ActionType = {
  type: string
}

type StateType = {
  collapsed: boolean
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

export const UnControlledAccordion = ({title,items}:UnControlledAccordionPropsType) => {
  const reducer = (state: StateType, action:ActionType): StateType => {
    switch(action.type){
      case TOGGLE_CONSTANT :
        const stateCopy = {
          ...state,
          collapsed: !state.collapsed  
        }
      return stateCopy
      default:
         return state
    }

  }

  const [state, dispatch] = useReducer(reducer,{collapsed: false})



  const handleItemClick = (value: any) => {
    console.log(`Item with value ${value} was clicked`);
  };
 return (
  <div >
  <AccordionTitle title={title} onClick={()=> dispatch({type:TOGGLE_CONSTANT })}/>
  {!state.collapsed && <AccordionBody items={items} onClick={handleItemClick}/>}
  
</div>
 )
};
