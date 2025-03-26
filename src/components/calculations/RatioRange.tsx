"use client";

import React, { ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Slider } from "@/components/ui/slider";

type Props<TField extends FieldValues> = {
  control: Control<TField>;
  name: Path<TField>;
  label?: ReactNode;
  minValue: number;
  maxValue: number;
  step?: number;
};

//* Used for adjusting values with shadcns Slider/input[type=range]

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
      render={({ field }) => {
        const { onChange, value } = field;

        return (
          <>
            {label}
            <Slider
              value={[Number(value)]}
              min={minValue}
              max={maxValue}
              step={step}
              onValueChange={(vals) => onChange(vals[0])}
            ></Slider>
            <div className="mt-5 text-md">Current ratio is 1:{value}</div>
          </>
        );
      }}
    />
  );
};

export default RangeInput;
