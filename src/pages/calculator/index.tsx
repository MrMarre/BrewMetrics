import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { BREW_METHOD_RANGES, type RatioRange } from "@/constants/brewRanges";
import {
	BREW_METHOD_DEFAULTS,
	type BrewDefaults,
} from "@/constants/brewDefaults";
import { convertWater, reverseConvertWater } from "@/utils/unitConversion";

export default function Calculator() {
	const [brewMethod, setBrewMethod] = useState("Pour-over");
	const [strength, setStrength] = useState(15);
	const [coffeeUnit, setCoffeeUnit] = useState("grams");
	const [waterUnit, setWaterUnit] = useState("milliliters");
	const [servings, setServings] = useState(1);
	const [showCustomize, setShowCustomize] = useState(false);

	const defaultBrewMethods = ["Pour-over", "French press", "Auto drip", "V60"];
	const extraBrewMethods = [
		"Moka Pot",
		"Chemex",
		"Siphon",
		"Cold Brew",
		"AeroPress",
	];
	const coffeeUnits = ["grams", "ounces", "teaspoons", "tablespoons"];
	const waterUnits = ["grams", "milliliters", "liters", "fluid ounces"];

	const [showMoreBrewMethods, setShowMoreBrewMethods] = useState(false);
	const displayedBrewMethods = showMoreBrewMethods
		? [...defaultBrewMethods, ...extraBrewMethods]
		: defaultBrewMethods;

	const brewDefaults: BrewDefaults =
		BREW_METHOD_DEFAULTS[brewMethod] || BREW_METHOD_DEFAULTS["Pour-over"];

	// preset values for different brew methods
	const ratioRange = useMemo<RatioRange>(() => {
		return BREW_METHOD_RANGES[brewMethod] || BREW_METHOD_RANGES["Pour-over"];
	}, [brewMethod]);

	// Set the default value to middle of recommended range
	useEffect(() => {
		const mid = Math.round((ratioRange.min + ratioRange.max) / 2);
		setStrength(mid);
	}, [ratioRange]);

	//?? Utils! Initialize wateramount based on defaults/constants
	const roundToHalf = (num: number) => Math.round(num * 2) / 2;

	const [waterPerServing, setWaterPerServing] = useState(
		brewDefaults.waterPerServing,
	);

	const [waterAmount, setWaterAmount] = useState(brewDefaults.waterPerServing);
	const [coffeeAmount, setCoffeeAmount] = useState(waterAmount / strength);

	//To handle raw text input
	const displayPrecision = waterUnit === "liters" ? 2 : undefined;
	const [waterInput, setWaterInput] = useState(
		convertWater(waterPerServing, waterUnit, displayPrecision).toString(),
	);

	// const handleWaterBlur = () => {
	// 	const parsed = Number(waterInput);
	// 	if (!Number.isNaN(parsed)) {
	// 		if (waterUnit === "liters") {
	// 			// Snap to a multiple of 0.05 (allowed increments: 0.5, 1.0 etc.)
	// 			const valid = Math.round(parsed * 2) / 2;
	// 			// Update the base value (in ml) using reverseConvertWater, then update the input display
	// 			// setWaterPerServing(reverseConvertWater(valid, waterUnit));
	// 			setWaterInput(valid.toFixed(1));
	// 		} else {
	// 			setWaterPerServing(reverseConvertWater(parsed, waterUnit));
	// 			setWaterInput(
	// 				convertWater(
	// 					reverseConvertWater(parsed, waterUnit),
	// 					waterUnit,
	// 				).toString(),
	// 			);
	// 		}
	// 	} else {
	// 		// If input is invalid, revert to the proper converted value
	// 		setWaterInput(convertWater(waterPerServing, waterUnit).toString());
	// 	}
	// };
	//?? state and effect for taking customization of base unit into account

	// When servings change, update waterAmount.
	useEffect(() => {
		setWaterAmount(waterPerServing * servings);
	}, [servings, waterPerServing]);

	useEffect(() => {
		setWaterPerServing(brewDefaults.waterPerServing);
	}, [brewDefaults.waterPerServing]);

	// When waterAmount or strength changes, update coffeeAmount.
	useEffect(() => {
		setCoffeeAmount(waterAmount / strength);
	}, [waterAmount, strength]);

	return (
		<div>
			<Head>
				<title>Coffee to Water Ratio explained</title>
			</Head>
			<main className="container mx-auto p-8 flex flex-col gap-8 items-center">
				<h1 className="text-3xl font-bold text-center">
					Coffee to Water Ratio Calculator
				</h1>

				{/* 1. Select Brew Method */}
				<section className="p-4 border rounded-lg w-full max-w-md">
					<h2 className="text-2xl mb-4">Select Brewing Method</h2>
					<div className="flex flex-col gap-2">
						{displayedBrewMethods.map((method) => (
							<label key={method} className="inline-flex items-center">
								<input
									type="radio"
									name="brewMethod"
									value={method}
									checked={brewMethod === method}
									onChange={() => setBrewMethod(method)}
									className="mr-2"
								/>
								{method}
							</label>
						))}
						{!showMoreBrewMethods && (
							<button
								type="button"
								onClick={() => setShowMoreBrewMethods(true)}
								className="text-sm text-blue-500"
							>
								Show more brewing methods
							</button>
						)}
					</div>
				</section>

				{/* 2. Adjust Strength */}
				<section className="p-4 border rounded-lg w-full max-w-md">
					<h2 className="text-2xl mb-4">Adjust Strength</h2>
					<input
						type="range"
						{...ratioRange}
						value={strength}
						onChange={(e) => setStrength(Number(e.target.value))}
						className="w-full"
					/>
					<div className="mt-2 text-sm">Current ratio is 1:{strength}</div>
				</section>

				{/* 3. Choose Units */}
				<section className="p-4 border rounded-lg w-full max-w-md">
					<h2 className="text-2xl mb-4">Choose Units</h2>

					{/* 3.1 Ground Coffee */}
					<div className="mb-4">
						<h3 className="text-xl mb-2">Ground Coffee</h3>
						<div className="flex flex-col gap-2">
							{coffeeUnits.map((unit) => (
								<label key={unit} className="inline-flex items-center">
									<input
										type="radio"
										name="coffeeUnit"
										value={unit}
										checked={coffeeUnit === unit}
										onChange={() => setCoffeeUnit(unit)}
										className="mr-2"
									/>
									{unit.charAt(0).toUpperCase() + unit.slice(1)}
								</label>
							))}
						</div>
					</div>

					{/* 3.2 Water */}
					<div>
						<h3 className="text-xl mb-2">Water</h3>
						<div className="flex flex-col gap-2">
							{waterUnits.map((unit) => (
								<label key={unit} className="inline-flex items-center">
									<input
										type="radio"
										name="waterUnit"
										value={unit}
										checked={waterUnit === unit}
										onChange={() => setWaterUnit(unit)}
										className="mr-2"
									/>
									{unit.charAt(0).toUpperCase() + unit.slice(1)}
								</label>
							))}
						</div>
					</div>
				</section>

				{/* 4. Choose Number of Servings */}
				<section className="p-4 border rounded-lg w-full max-w-md">
					<h2 className="text-2xl mb-4">Decide on number of servings</h2>
					<div className="flex items-center gap-4">
						<button
							type="button"
							onClick={() => setServings(Math.max(1, servings - 1))}
							className="px-3 py-1 border rounded"
						>
							-
						</button>
						<span>{servings}</span>
						<button
							type="button"
							onClick={() => setServings(servings + 1)}
							className="px-3 py-1 border rounded"
						>
							+
						</button>
						{/* 4.1 Dropdown toggle to show or hide custom */}
						<button
							type="button"
							onClick={() => setShowCustomize((prev) => !prev)}
							className="px-3 py-1 border rounded ml-4 text-sm text-blue-500"
						>
							{showCustomize ? "Hide" : "Adjust volume per serving"}
						</button>
					</div>

					{/* 5. Customize Water and Coffee on conditional */}
					{showCustomize && (
						<div className="mt-4">
							<h2 className="text-2xl mb-4">Customize Unit Size</h2>
							<div className="flex flex-col gap-4">
								<div>
									<label htmlFor="water-amount" className="block mb-1">
										Water per serving ({waterUnit})
									</label>
									<div className="flex items-center gap-2">
										<button
											type="button"
											onClick={() =>
												setWaterPerServing(Math.max(0, waterPerServing - 10))
											}
											className="px-3 py-1 border rounded"
										>
											-
										</button>
										<input
											id="water-per-serving"
											type="number"
											value={convertWater(waterPerServing, waterUnit)}
											onChange={(e) =>
												setWaterPerServing(
													reverseConvertWater(
														Number(e.target.value),
														waterUnit,
													),
												)
											}
											// onBlur={handleWaterBlur}
											className="w-24 text-center border rounded"
										/>
										<button
											type="button"
											onClick={() => setWaterPerServing(waterPerServing + 10)}
											className="px-3 py-1 border rounded"
										>
											+
										</button>
									</div>
								</div>
								<div>
									<label htmlFor="coffee-amount" className="block mb-1">
										Coffee Amount ({coffeeUnit})
									</label>
									<div className="flex items-center gap-2">
										<button
											type="button"
											onClick={() =>
												setCoffeeAmount(Math.max(0, coffeeAmount - 1))
											}
											className="px-3 py-1 border rounded"
										>
											-
										</button>
										<input
											id="coffee-amount"
											type="number"
											value={Number(coffeeAmount.toFixed(2))}
											onChange={(e) => setCoffeeAmount(Number(e.target.value))}
											className="w-24 text-center border rounded"
										/>
										<button
											type="button"
											onClick={() => setCoffeeAmount(coffeeAmount + 1)}
											className="px-3 py-1 border rounded"
										>
											+
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</section>

				{/* 6. Display Calculated Values */}
				<section className="p-4 border rounded-lg w-full max-w-md">
					<h2 className="text-2xl mb-4">Calculated Values</h2>
					<div className="p-4 bg-gray-100 rounded">
						<p>
							Based on your selections, your recipe is:{" "}
							<strong>
								{`${Number(coffeeAmount.toFixed(1))} ${coffeeUnit} of coffee for ${convertWater(
									waterAmount,
									waterUnit,
								)} ${waterUnit} of water`}
							</strong>
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}
//<strong>{`${coffeeAmount} ${coffeeUnit} of coffee for ${waterAmount} ${waterUnit} of water`}</strong>
