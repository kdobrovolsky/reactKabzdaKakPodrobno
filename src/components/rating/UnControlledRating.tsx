import React, { useState } from 'react';

type UnControlledRatingPropsType = {
   
  };

export const UnControlledRating = ({}:UnControlledRatingPropsType) => {
    
    let [value, setValue] = useState(0)

   
    return (
        <div>
          <Star selected={value > 0} onClick={() => setValue(1)}/>
          <Star selected={value > 1} onClick={() => setValue(2)}/>
          <Star selected={value > 2} onClick={() => setValue(3)}/>
          <Star selected={value > 3} onClick={() => setValue(4)}/>
          <Star selected={value > 4} onClick={() => setValue(5)}/>
        </div>
      );
  };
  
  type StarPropsType = {
    selected: boolean;
    onClick?: ()=> void
  };
  
  export const Star = ({ selected,onClick}: StarPropsType) => {
    if (selected) {
      return (
        <span onClick={onClick}>
          <b>star</b>{" "}
        </span>
      );
    } else {
      return <span onClick={onClick}>star </span>;
    }
};
