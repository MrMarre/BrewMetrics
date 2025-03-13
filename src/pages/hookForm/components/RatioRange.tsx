"use client";

import React, { ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<TField extends FieldValues> = {
	control: Control<TField>;
	name: Path<TField>;
	label?: ReactNode;
	minValue: number;
	maxValue: number;
	step?: number;
};

const RangeInput = <TField extends FieldValues>({
	control,
	name,
	label,
	minValue,
	maxValue,
	step = 1,
}: Props<TField>) => {
	return (
		<Controller
			control={control}
			name={name}
			// rules={{
			// 	min: {
			// 		value: minValue,
			// 		message: `Value should not be lower than ${minValue}.`,
			// 	},
			// 	max: {
			// 		value: maxValue,
			// 		message: `Value should not exceed ${maxValue}.`,
			// 	},
			// }}
			render={({ field, fieldState }) => {
				const { onChange, value } = field;
				// const { error } = fieldState;
				return (
					<section className="p-4 border rounded-lg w-full max-w-md">
						{label}
						<input
							type="range"
							onChange={onChange}
							value={value}
							min={minValue}
							max={maxValue}
							step={step}
							className="w-full"
						/>
						<div className="mt-2 text-sm">Current ratio is 1:{value}</div>
						{/* {error && <p className="text-red-500 text-sm">{error.message}</p>} */}
					</section>
				);
			}}
		/>
	);
};

export default RangeInput;
