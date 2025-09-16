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
};

// NumberField component, controlled with react-hook-form
// Used for handling numeric input on incrementer AND manual typing

const NumberField = <TField extends FieldValues>({
  control,
  name,
  label,
  onChangeHandler,
  valueFormatter,
  dependantValue,
  incrementValue,
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
            <div className="flex items-center justify-center gap-2 w-full">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  onChange(Math.max(1, Number(value) - incrementValue));
                  onBlur();
                }}
                className="w-8 px-3 py-1 border rounded bg-[var(--tertiary)]"
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
                    ? valueFormatter(value, dependantValue ?? "") ?? ""
                    : value
                }
                onChange={(e) => {
                  const value = e.target.value;
                  const parsedValue =
                    value === ""
                      ? ""
                      : onChangeHandler
                      ? onChangeHandler(Number(value), dependantValue ?? "") ??
                        ""
                      : value ?? "";

                  onChange(parsedValue);
                  onBlur();
                }}
                onBlur={onBlur}
                className="text-center border rounded"
              />
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  onChange(Math.max(0, Number(value) + incrementValue));
                  onBlur();
                }}
                className="w-8 px-3 py-1 border rounded bg-[var(--tertiary)]"
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
