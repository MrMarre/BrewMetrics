export function convertWater(
	amount: number,
	toUnit: string,
	precision?: number,
): number {
	// Assume the base unit is milliliters.
	let converted: number;
	switch (toUnit) {
		case "grams":
		case "milliliters":
			converted = amount;
			return Number(converted.toFixed(precision ?? 0));
		case "liters":
			converted = amount / 1000;
			return Number(converted.toFixed(precision ?? 3));
		case "fluid ounces":
			// 1 fluid ounce is approx. 29.57 ml or g.
			converted = amount / 29.57;
			return Number(converted.toFixed(precision ?? 1));
		default:
			return amount;
	}
}

export function reverseConvertWater(amount: number, fromUnit: string): number {
	switch (fromUnit) {
		case "milliliters":
		case "grams":
			return amount;
		case "liters":
			return amount * 1000;
		case "fluid ounces":
			return amount * 29.57;
		default:
			return amount;
	}
}
