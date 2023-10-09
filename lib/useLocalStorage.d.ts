export default function useLocalStorage<T>(key: string, initialValue: T): readonly [T, (value: T) => void];
