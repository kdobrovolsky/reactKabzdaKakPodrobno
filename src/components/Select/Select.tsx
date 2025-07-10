
type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
  value: any;
  onChange: (value: any) => void
  items: ItemType[]
};

export const Select = ({ items,value,onChange }: SelectPropsType) => {
    return (
      <div>
        <div>{}</div>
        {items.map(t=> <div>{t.title}</div>)}
      </div>
    );
};

type StarPropsType = {
  selected: boolean;
 
  onClick?: ()=> void
};

export const Star = ({ selected, onClick, }: StarPropsType) => {
  return (selected) 
  ? (<span onClick={onClick}>
       <b>star</b>{" "}
     </span>)
: (<span onClick={onClick}>star </span>)
 
};
