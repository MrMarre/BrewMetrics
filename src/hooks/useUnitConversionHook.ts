import {
	convertFromGramsToCoffeeSpoons,
	convertFromCoffeeSpoonsToOunces,
	convertFromGramsToOunces,
	convertFromOuncesToCoffeeSpoons,
	convertFromOuncesToGrams,
	convertFromCoffeeSpoonsToGrams,
} from "@/utils/unitConversion";
import { useState } from "react";

const useUnitConversionHook = () => {
	const [unit, setUnit] = useState("grams");

	function convertCoffeeUnit(
		amount: number,
		toUnit: string,
		precision?: number,
	): number {
		console.log("unit", unit);

		const lastUnitUsed = unit;
		setUnit(toUnit);

		if (toUnit === "coffee spoons" && lastUnitUsed === "grams") {
			return convertFromGramsToCoffeeSpoons(amount);
		}
		if (toUnit === "ounces" && lastUnitUsed === "grams") {
			return convertFromGramsToOunces(amount);
		}
		if (toUnit === "coffee spoons" && lastUnitUsed === "ounces") {
			return convertFromOuncesToCoffeeSpoons(amount);
		}
		if (toUnit === "ounces" && lastUnitUsed === "coffee spoons") {
			return convertFromCoffeeSpoonsToOunces(amount);
		}
		if (toUnit === "grams" && lastUnitUsed === "ounces") {
			return convertFromOuncesToGrams(amount);
		}
		if (toUnit === "grams" && lastUnitUsed === "coffee spoons") {
			return convertFromCoffeeSpoonsToGrams(amount);
		}

		return amount;
	}

	return { convertCoffeeUnit };
};

export default useUnitConversionHook;
