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
          <>
            {label}
            <Slider
              value={[Number(value)]}
              min={minValue}
              max={maxValue}
              step={step}
              onValueChange={(vals) => onChange(vals[0])}
            ></Slider>
            <div className="mt-5 text-sm">Current ratio is 1:{value}</div>
          </>
        );
      }}
    />
  );
};

export default RangeInput;
