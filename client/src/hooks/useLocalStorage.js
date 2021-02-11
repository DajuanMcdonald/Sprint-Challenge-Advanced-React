import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const element = window.location.getItem(key);
        return element ? JSON.parse(element) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    };
    return [storedValue, setValue, initialValue];
};