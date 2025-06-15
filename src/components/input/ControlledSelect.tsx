import React, { ChangeEvent, FormEvent, useState } from 'react';

export const ControlledSelect = () => {
    const [perentValue, setPerentValue] = useState<string|undefined>('1')
        
         const onChangeCheckBoxHandler = (e:FormEvent<HTMLOptionElement>) => {
             return setPerentValue(e.currentTarget.value)
         }

    return (
    <div>
      <select value={perentValue}>
        <option value={"1"} >none</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Moskow</option>
      </select>
    </div>
  );
};
