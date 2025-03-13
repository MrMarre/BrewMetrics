import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { BREW_METHOD_RANGES, type RatioRange } from "@/constants/brewRanges";
import {
	BREW_METHOD_DEFAULTS,
	type BrewDefaults,
} from "@/constants/brewDefaults";
import {
	convertCoffeeUnit,
	convertWater,
	reverseConvertWater,
} from "@/utils/unitConversion";
import NumberField from "./components/NumberField";
import useFormStates from "./utils/useFormStates";
import RadioButtons from "./components/RadioButtons";
import RangeInput from "./components/RatioRange";
import SectionCard from "./components/SectionCard";

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
const coffeeUnits = ["grams", "ounces", "coffee spoons"];
const waterUnits = ["grams", "milliliters", "liters", "fluid ounces"];

export default function Calculator() {
	const {
		watch,
		control,
		handleResetClick,
		waterAmount,
		ratioRange,

		coffeeAmount,
	} = useFormStates();

	const [showCustomize, setShowCustomize] = useState(false);

	return (
		<div>
			<Head>
				<title>Coffee to Water Ratio explained</title>
			</Head>
			<button
				className="px-3 py-1 border rounded"
				type="button"
				onClick={handleResetClick}
			>
				reset all
			</button>

			<form className="container mx-auto p-8 flex flex-col gap-8 items-center">
				<h1 className="text-3xl font-bold text-center">React-hook-form-calc</h1>
				<SectionCard>
					{/* 1. Select Brew Method */}
					<RadioButtons
						control={control}
						name="brewMethod"
						label={<h2 className="text-2xl mb-4">Select Brewing Method</h2>}
						options={defaultBrewMethods}
						limitAmount={4}
					/>
				</SectionCard>
				{/* 2. Adjust Strength */}
				<SectionCard>
					<RangeInput
						label={<h2 className="text-2xl mb-4">Adjust Strength</h2>}
						control={control}
						name="strength"
						minValue={ratioRange.min}
						maxValue={ratioRange.max}
					/>
				</SectionCard>

				{/* 3. Choose Units */}
				<SectionCard>
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
				</SectionCard>

				{/* 4. Choose Number of Servings */}
				<SectionCard>
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
									incrementValue={1}
								/>
							</div>
						</div>
					)}
				</SectionCard>

				{/* 6. Display Calculated Values */}
				<SectionCard>
					<h2 className="text-2xl mb-4">Calculated Values</h2>
					<div className="flex flex-col gap-4">
						<div className="p-4 bg-gray-100 rounded">
							<h3 className="text-lg font-bold">Coffee</h3>
							<p>{coffeeAmount}</p>
						</div>
						<div className="p-4 bg-gray-100 rounded">
							<h3 className="text-lg font-bold">Water</h3>
							<p>
								{`${convertWater(
									waterAmount,
									watch("waterUnit") ?? "",
									0,
								)} ${watch("waterUnit")}`}
							</p>
						</div>
					</div>
				</SectionCard>
			</form>
		</div>
	);
}

{
	/* <div className="p-4 bg-gray-100 rounded">
						<p>
							Based on your selections, your recipe is:{" "}
							<strong>
								{`${Number((watch("coffeeAmount") ?? 0) * (watch("servings") ?? 0)).toFixed(1)} ${watch("coffeeUnit")} of coffee for ${convertWater(
									waterAmount,
									watch("waterUnit") ?? "",
								)} ${watch("waterUnit")} of water.`}
							</strong>
						</p>
					</div> */
}
