import { useCallback, useState } from 'react';

export function useToggle(initialValue: boolean | (() => boolean) = false): [boolean, (specificValue?: unknown) => void] {
  const [toggledValue, setToggledValue] = useState(initialValue);

  // Typed "specificValue" as "unknown" to allow use directly in "onClick" and similar
  const toggle = useCallback((specificValue?: unknown) => {
    if (typeof specificValue === 'boolean') {
      setToggledValue(specificValue);
    } else {
      setToggledValue(prev => !prev);
    }
  }, []);

  return [toggledValue, toggle];
}
