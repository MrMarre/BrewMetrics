"use client";

import React, { useState, ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<TField extends FieldValues> = {
	control: Control<TField>;
	name: Path<TField>;
	options: Array<string>;
	label?: ReactNode;
	limitAmount?: number;
};

const RadioButtons = <TField extends FieldValues>({
	control,
	name,
	label,
	options,
	limitAmount,
}: Props<TField>) => {
	const allOptions = options;

	const [parsedOptions, setParsedOptions] = useState<Array<string>>(
		limitAmount ? options.slice(0, limitAmount) : options,
	);

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const handleExpandClick = () => {
		if (isExpanded) {
			setParsedOptions(limitAmount ? options.slice(0, limitAmount) : options);
		} else {
			setParsedOptions(allOptions);
		}
	};

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => {
				const { onChange, value } = field;
				const buttonIsDisabled = limitAmount
					? parsedOptions.indexOf(value) >= limitAmount
					: false;

				return (
					<>
						{label}
						<div className="flex flex-col gap-2">
							{parsedOptions.map((option) => (
								<label
									key={option}
									className="inline-flex items-center capitalize"
								>
									<input
										type="radio"
										name={name}
										value={option}
										checked={value === option}
										onChange={() => onChange(option)}
										className="mr-2"
									/>
									{option}
								</label>
							))}
							{limitAmount && (
								<button
									disabled={buttonIsDisabled}
									type="button"
									onClick={() => {
										setIsExpanded(!isExpanded);
										handleExpandClick();
									}}
									className={`text-sm ${buttonIsDisabled ? "text-red-400" : "text-blue-500"}`}
								>
									{isExpanded
										? "Show less brewing methods"
										: "Show more brewing methods"}
								</button>
							)}
						</div>
					</>
				);
			}}
		/>
	);
};

export default RadioButtons;
