import { FunctionComponent } from 'preact';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { ValueType } from '../models.ts';
import { getValueTypeColorClass } from '../utils.ts';

const ValueTypeDropdown: FunctionComponent<ValueTypeDropdownProps> = (
  { valueType = ValueType.STRING, onSelect = () => {} },
) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener('mousedown', closeMenuOnOutsideClick);
    } else {
      document.removeEventListener('mousedown', closeMenuOnOutsideClick);
    }
  }, [menuVisible]);

  const closeMenuOnOutsideClick = useMemo(() => (event: Event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  });

  const changeSelectedValueType = (event: Event, valueType: ValueType) => {
    event.preventDefault();
    setMenuVisible(false);
    onSelect(valueType);
  };

  const getAllValueTypes = (): ValueType[] => {
    const valueTypes: ValueType[] = [];
    for (const valueType in ValueType) {
      if (isNaN(Number(valueType))) {
        valueTypes.push(valueType);
      }
    }

    return valueTypes;
  };

  return (
    <div class='btn-group'>
      <button
        class={`btn btn-secondary btn-sm dropdown-toggle ${getValueTypeColorClass(valueType)}`}
        type='button'
        onClick={() => setMenuVisible(!menuVisible)}
      >
        {valueType}
      </button>
      <ul class={`dropdown-menu ${menuVisible ? 'show' : ''}`} style={{ top: '35px' }} ref={menuRef}>
        {getAllValueTypes().map((valueType) => (
          <li>
            <a class='dropdown-item' href='#' onClick={(event) => changeSelectedValueType(event, valueType)}>
              {valueType}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export interface ValueTypeDropdownProps {
  valueType?: ValueType;
  onSelect?: (valueType: ValueType) => void;
}

export default ValueTypeDropdown;
