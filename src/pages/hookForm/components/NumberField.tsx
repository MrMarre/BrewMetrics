"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Control, FieldValues, Path, Controller } from "react-hook-form";

type Props<TField extends FieldValues> = {
	control: Control<TField>;
	name: Path<TField>;
	label?: string;
	incrementValue: number;
	onChangeHandler?: (value: number, dependantValue: string) => void;
	valueFormatter?: (value: number, dependantValue: string) => number | string;
	dependantValue?: string;
	minValue?: number;
	ratioRangeMin?: number;
	ratioRangeMax?: number;
};

const NumberField = <TField extends FieldValues>({
	control,
	name,
	label,
	onChangeHandler,
	valueFormatter,
	dependantValue,
	incrementValue,
	minValue = 1,
	ratioRangeMin,
	ratioRangeMax,
}: Props<TField>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => {
				const { onChange, value, ref, onBlur } = field;
				return (
					<div>
						<label htmlFor={name} className="block mb-1">
							{label} {dependantValue}
						</label>
						<div className="flex items-center gap-2">
							<Button
								type="button"
								variant="outline"
								onClick={() =>
									onChange(Math.max(0, Number(value) - incrementValue))
								}
								className="px-3 py-1 border rounded"
							>
								-
							</Button>
							<input
								ref={ref}
								id={name}
								type="number"
								value={
									value === ""
										? ""
										: valueFormatter
											? (valueFormatter(value, dependantValue ?? "") ?? "")
											: value
								}
								onChange={(e) => {
									const value = e.target.value;
									const parsedValue =
										value === ""
											? ""
											: onChangeHandler
												? (onChangeHandler(
														Number(value),
														dependantValue ?? "",
													) ?? "")
												: (value ?? "");

									onChange(parsedValue);
								}}
								onBlur={onBlur}
								className="w-24 text-center border rounded"
							/>
							<Button
								variant="outline"
								type="button"
								onClick={() =>
									onChange(Math.max(0, Number(value) + incrementValue))
								}
								className="px-3 py-1 border rounded"
							>
								+
							</Button>
						</div>
					</div>
				);
			}}
		/>
	);
};

export default NumberField;
