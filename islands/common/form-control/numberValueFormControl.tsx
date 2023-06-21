import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const NumberValueFormControl: FunctionComponent<NumberValueFormControlProps> = (
  { id, value = 0, disabled, onChange = () => {} },
) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => setInternalValue(value), [value]);

  const changeValue = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    let newValue = inputElement.valueAsNumber;
    if (isNaN(inputElement.valueAsNumber)) {
      newValue = 0;
    }

    setInternalValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type='number'
      class='form-control'
      id={id}
      value={internalValue}
      disabled={disabled}
      onChange={changeValue}
    />
  );
};

export interface NumberValueFormControlProps {
  id?: string;
  value: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export default NumberValueFormControl;