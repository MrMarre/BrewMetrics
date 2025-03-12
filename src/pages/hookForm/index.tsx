import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { BREW_METHOD_RANGES, type RatioRange } from "@/constants/brewRanges";
import {
	BREW_METHOD_DEFAULTS,
	type BrewDefaults,
} from "@/constants/brewDefaults";
import { convertWater, reverseConvertWater } from "@/utils/unitConversion";
import NumberField from "./components/NumberField";
import useFormStates from "./utils/useFormStates";
import RadioButtons from "./components/RadioButtons";

const defaultBrewMethods = [
	"Pour-over",
	"French press",
	"Auto drip",
	"V60",
	"Moka Pot",
	"Chemex",
	"Siphon",
	"Cold Brew",
	"AeroPress",
];

export default function Calculator() {
	const [brewMethod, setBrewMethod] = useState("Pour-over"); // radiobuttons
	const [strength, setStrength] = useState(15); // number skall ändras utefter vald brewmethod
	const [showCustomize, setShowCustomize] = useState(false); // boolean

	const coffeeUnits = ["grams", "ounces", "teaspoons", "tablespoons"];
	const waterUnits = ["grams", "milliliters", "liters", "fluid ounces"];

	// preset values for different brew methods
	const ratioRange = useMemo<RatioRange>(() => {
		return BREW_METHOD_RANGES[brewMethod] || BREW_METHOD_RANGES["Pour-over"];
	}, [brewMethod]);

	const { watch, control, handleResetClick, waterAmount } = useFormStates();

	return (
		<div>
			<Head>
				<title>Coffee to Water Ratio explained</title>
			</Head>
			<button type="button" onClick={handleResetClick}>
				reset all
			</button>
			<form className="container mx-auto p-8 flex flex-col gap-8 items-center">
				<h1 className="text-3xl font-bold text-center">React-hook-form-calc</h1>
				<section className="p-4 border rounded-lg w-full max-w-md">
					{/* 1. Select Brew Method */}
					<RadioButtons
						control={control}
						name="brewMethod"
						label={<h2 className="text-2xl mb-4">Select Brewing Method</h2>}
						options={defaultBrewMethods}
						limitAmount={4}
					/>
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

					<RadioButtons
						control={control}
						name="coffeeUnit"
						label={<h3 className="text-xl my-2">Ground Coffee</h3>}
						options={coffeeUnits}
					/>

					<RadioButtons
						control={control}
						name="waterUnit"
						label={<h3 className="text-xl my-2">Water</h3>}
						options={waterUnits}
					/>
				</section>

				{/* 4. Choose Number of Servings */}
				<section className="p-4 border rounded-lg w-full max-w-md">
					<h2 className="text-2xl mb-4">Decide on number of servings</h2>
					<div className="flex items-center gap-4">
						<NumberField control={control} name="servings" incrementValue={1} />

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
								<NumberField
									control={control}
									name="waterPerServing"
									label="Water per serving in"
									onChangeHandler={reverseConvertWater}
									valueFormatter={convertWater}
									dependantValue={watch("waterUnit")}
									incrementValue={10}
								/>
								<NumberField
									control={control}
									name="coffeeAmount"
									label="Coffee Amount in"
									dependantValue={watch("coffeeUnit")}
									incrementValue={10}
								/>
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
								{`${Number((watch("coffeeAmount") ?? 0) * (watch("servings") ?? 0)).toFixed(1)} ${watch("coffeeUnit")} of coffee for ${convertWater(
									waterAmount,
									watch("waterUnit") ?? "",
								)} ${watch("waterUnit")} of water.`}
							</strong>
						</p>
					</div>
				</section>
			</form>
		</div>
	);
}
