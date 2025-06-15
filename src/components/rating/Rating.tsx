
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5 

type RatingPropsType = {
  value: number;
  onClick: (value: RatingValueType) => void
};

export const Rating = ({ value,onClick }: RatingPropsType) => {
    return (
      <div>
        <Star selected={value > 0} onClick={()=>onClick(1)}/>
        <Star selected={value > 1} onClick={()=>onClick(2)}/>
        <Star selected={value > 2} onClick={()=>onClick(3)}/>
        <Star selected={value > 3} onClick={()=>onClick(4)}/>
        <Star selected={value > 4} onClick={()=>onClick(5)}/>
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
