import { BREW_METHOD_DEFAULTS } from "@/constants/brewDefaults";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { convertWater } from "@/utils/unitConversion";

type FormDataType = {
	brewMethod?: string;
	strength?: number;
	coffeeUnit?: string;
	waterUnit?: string;
	servings?: number;
	waterPerServing?: number;
	coffeeAmount?: number;
};

const initialValues: FormDataType = {
	brewMethod: "Pour-over",
	strength: 15,
	coffeeUnit: "grams",
	waterUnit: "milliliters",
	servings: 1,
	waterPerServing: BREW_METHOD_DEFAULTS["Pour-over"].waterPerServing,
	coffeeAmount: BREW_METHOD_DEFAULTS["Pour-over"].waterPerServing / 15,
};

const useFormStates = () => {
	const { reset, control, watch, getValues } = useForm<FormDataType>({
		defaultValues: initialValues,
	});

	const [waterAmount, setWaterAmount] = useState<number>(
		(initialValues.waterPerServing ?? 0) / (initialValues.servings ?? 0),
	);

	const handleResetClick = () => reset(initialValues);

	const servings = watch("servings");
	const waterPerServing = watch("waterPerServing");
	const coffeeAmount = watch("coffeeAmount");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (waterPerServing && coffeeAmount) {
			setWaterAmount((servings ?? 0) * (waterPerServing ?? 0));
		}
	}, [getValues, waterPerServing, setWaterAmount, servings, coffeeAmount]);

	return {
		watch,
		control,
		handleResetClick,
		waterAmount,
	};
};

export default useFormStates;
