import React, { ChangeEvent, useState } from 'react';

export const ControlledCheckBox = () => {
 const [perentValue, setPerentValue] = useState(true)
    
     const onChangeCheckBoxHandler = (e:ChangeEvent<HTMLInputElement>) => {
         return setPerentValue(e.currentTarget.checked)
     }
 
     return (
     <div>
       <input type='checkbox' checked={perentValue} onChange={onChangeCheckBoxHandler}/>
       {typeof perentValue}
     </div>
   );
};
