import { useState } from "react";
export function useLocalStorage(key, initialValue) {
    const [sortedValue, setSortedValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            return initialValue;
        }
    });
    const setUniqueStringValue = (value) => {
        try {
            const newValue = Array.isArray(value) ? value : value;
            setSortedValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        }
        catch (error) {
            console.error(error);
        }
    };
    return [sortedValue, setUniqueStringValue];
}
//# sourceMappingURL=useLocalStorage.js.map