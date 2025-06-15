import React, { ChangeEvent, useState } from 'react';

export const ControlledInput = () => {
    const [perentValue, setPerentValue] = useState('')
   
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        return setPerentValue(e.currentTarget.value)
    }

    return (
    <div>
      <input value={perentValue} onChange={onChangeInputHandler}/>
      {perentValue}
    </div>
  );
};
