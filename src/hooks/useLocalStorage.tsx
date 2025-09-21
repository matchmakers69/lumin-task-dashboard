import { useState, useEffect } from "react";

export const useLocalStorage = <T,>(key: string, initialValue: T | null) => {
	const [storedValue, setStoredValue] = useState<T | null>(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? (JSON.parse(item) as T) : initialValue;
		} catch (error) {
			console.error("Error reading localStorage key", key, error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			if (storedValue === null) {
				localStorage.removeItem(key);
			} else {
				localStorage.setItem(key, JSON.stringify(storedValue));
			}
		} catch (error) {
			console.error("Error writing localStorage key", key, error);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue] as const;
};
