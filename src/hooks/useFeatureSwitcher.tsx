import { useMemo, useState } from "react";

type Setter<T> = T | (() => T);

export const useFeatureSwitcher = (defaultState: Setter<boolean> = false) => {
	const [initState] = useState(defaultState);
	const [isOn, setIsOn] = useState(initState);
	return useMemo(
		() => ({
			isOn,
			isOff: !isOn,
			on: () => setIsOn(true),
			off: () => setIsOn(false),
		}),
		[isOn],
	);
};
