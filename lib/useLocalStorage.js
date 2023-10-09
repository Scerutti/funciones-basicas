import { useState } from "react";
import toString from "./toString";
export default function useLocalStorage(key, initialValue) {
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
            throw new Error(toString(error));
        }
    };
    return [sortedValue, setUniqueStringValue];
}
//# sourceMappingURL=useLocalStorage.js.map