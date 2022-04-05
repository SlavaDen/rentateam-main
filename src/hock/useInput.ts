import { useState } from 'react';

export interface IUseInputAttribute {
  value: string | number,
  onChange: Function,
  onBlur: Function,
  isDirty: boolean,
  onReset: Function,
  setDirty: Function,
}

const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  const onReset = () => {
    setDirty(false);
    setValue(initialValue);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    onReset,
    setDirty
  };
};

export default useInput;
