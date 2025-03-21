"use client";

import React, { useState, ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import cn from "clsx";
import { Button } from "../ui/button";

type Props<TField extends FieldValues> = {
  control: Control<TField>;
  name: Path<TField>;
  options: Array<string>;
  label?: ReactNode;
  limitAmount?: number;
};

const RadioGroup = <TField extends FieldValues>({
  control,
  name,
  label,
  options,
  limitAmount,
}: Props<TField>) => {
  const allOptions = options;

  const [parsedOptions, setParsedOptions] = useState<Array<string>>(
    limitAmount ? options.slice(0, limitAmount) : options
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
            <div className="flex flex-col gap-2 text-lg">
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
                    className={cn(
                      "appearance-none mr-2 w-4 h-4 rounded-full border transition-colors",
                      "border-gray-300 bg-white",
                      "hover:border-amber-600",
                      "checked:bg-violet-400 checked:border-amber-600"
                    )}
                  />
                  {option}
                </label>
              ))}
              {limitAmount && (
                <Button
                  disabled={buttonIsDisabled}
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsExpanded(!isExpanded);
                    handleExpandClick();
                  }}
                  className={`px-3 py-1 border rounded bg-[var(--tertiary)] ${
                    buttonIsDisabled
                      ? "text-red-400"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {isExpanded
                    ? "Show less brewing methods"
                    : "Show more brewing methods"}
                </Button>
              )}
            </div>
          </>
        );
      }}
    />
  );
};

export default RadioGroup;
