import React, { ChangeEvent, useRef, useState } from 'react';

export const UnControlledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    
    // const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.currentTarget.value)
    // }

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return (
        
    <div>
        

      <input ref={inputRef}   />
      <button onClick={save}>save</button>
      actual value:{value}
    </div>
  );
};
