"use client";

import React, { useState, ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import cn from "clsx";
import { Button } from "../ui/button";
import { Heading, HeadingProps } from "../ui/heading";

type Props<TField extends FieldValues> = {
  control: Control<TField>;
  name: Path<TField>;
  options: Array<string>;
  label?: ReactNode;
  limitAmount?: number;
  labelProps?: Partial<HeadingProps>;
};

//* Component with a flexible radio.
// limit amount handles limiting of number of radio's

const RadioGroup = <TField extends FieldValues>({
  control,
  name,
  label,
  options,
  limitAmount,
  labelProps,
}: Props<TField>) => {
  const allOptions = options;

  // parsedOptions innehåller de alternativ som ska visas initialt.

  const [parsedOptions, setParsedOptions] = useState<Array<string>>(
    limitAmount ? options.slice(0, limitAmount) : options
  );

  // isExpanded avgör om listan är expanderad (alla alternativ visas) eller inte.
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
        const { onChange, value, onBlur } = field;

        const buttonIsDisabled = limitAmount
          ? parsedOptions.indexOf(value) >= limitAmount
          : false;

        return (
          <>
            {/* {label} */}
            <Heading
              className={cn("text-xl", labelProps?.className)}
              {...labelProps}
            >
              {label}
            </Heading>
            <div className="flex flex-col gap-2 text-lg justify-center">
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
                    onChange={() => {
                      onChange(option);
                      onBlur();
                    }}
                    className={cn(
                      "appearance-none mr-2 w-4 h-4 rounded-full border transition-colors",
                      "border-gray-300 bg-white",
                      "hover:border-amber-600",
                      "checked:bg-violet-200 checked:border-amber-600"
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
                  className={`py-5 px-8 md:py-4 w-full md:w-1/2 mt-4 mx-auto border rounded bg-[var(--tertiary)] text-base ${
                    buttonIsDisabled
                      ? "text-red-400"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {isExpanded
                    ? "Show less brew methods"
                    : "Show more brew methods"}
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
