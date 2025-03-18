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
	// const [unit, setUnit] = useState("grams");

	function convertCoffeeUnit(
		amount: number,
		toUnit: string,
		fromUnit: string,
		precision?: number,
	): number {
		
		if (fromUnit === toUnit) return amount;

		if (fromUnit === "coffee spoons" && toUnit === "grams") {
			return convertFromGramsToCoffeeSpoons(amount);
		}
		if (fromUnit === "ounces" && toUnit === "grams") {
			return convertFromGramsToOunces(amount);
		}
		if (fromUnit === "coffee spoons" && toUnit === "ounces") {
			return convertFromOuncesToCoffeeSpoons(amount);
		}
		if (fromUnit === "ounces" && toUnit === "coffee spoons") {
			return convertFromCoffeeSpoonsToOunces(amount);
		}
		if (fromUnit === "grams" && toUnit === "ounces") {
			return convertFromOuncesToGrams(amount);
		}
		if (fromUnit === "grams" && toUnit === "coffee spoons") {
			return convertFromCoffeeSpoonsToGrams(amount);
		}

		return amount;
	}

	return { convertCoffeeUnit };
};

export default useUnitConversionHook;
