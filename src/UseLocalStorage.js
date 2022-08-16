import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  // Write your code here.

  // On mount of my application execute
  // and on mount check if there is value for the given key
  // if the value is present then return the value else
  // set the initial value.

  const [value, setValue] = useState(() => {
    const oldValue = JSON.parse(localStorage.getItem(key));
    if (oldValue == null) {
      const newValue = JSON.stringify(initialValue);
      localStorage.setItem(key, newValue);
      return initialValue;
    }
    return oldValue;
  });

  // This is the setter function and will be executed on every
  // change to the value variable
  // so basically my useLocalStorage is getting executed on
  // mount and on value change.
  const setStorageValue = (newValue) => {
    const updateValue = JSON.stringify(newValue);
    localStorage.setItem(key, updateValue);
    setValue(newValue);
  };
  // This return is very important, this is the thing being returned and captured in my code. so the code takes the array destructuring advantag.

  return [value, setStorageValue];
}
