import { BREW_METHOD_DEFAULTS } from "@/constants/brewDefaults";
import { useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import { BREW_METHOD_RANGES, RatioRange } from "@/constants/brewRanges";
import useUnitConversionHook from "@/hooks/useUnitConversionHook";

type FormDataType = {
  brewMethod?: string;
  strength?: number;
  coffeeUnit?: string;
  waterUnit?: string;
  servings?: number;
  waterPerServing?: number;
  coffeeAmount?: number;
};

const initialValues: FormDataType = {
  brewMethod: "Pour-over",
  strength: 16,
  coffeeUnit: "grams",
  waterUnit: "grams",
  servings: 1,
  waterPerServing: BREW_METHOD_DEFAULTS["Pour-over"].waterPerServing,
  coffeeAmount: BREW_METHOD_DEFAULTS["Pour-over"].waterPerServing / 16,
};

const useFormStates = () => {
  const { reset, control, watch, setValue } = useForm<FormDataType>({
    defaultValues: initialValues,
  });
  const { convertCoffeeUnit } = useUnitConversionHook();

  const [waterAmount, setWaterAmount] = useState<number>(
    (initialValues.waterPerServing ?? 0) / (initialValues.servings ?? 0)
  );

  const handleResetClick = () => reset(initialValues);

  const servings = watch("servings");
  const waterPerServing = watch("waterPerServing");

  const coffeeAmount = watch("coffeeAmount");
  const strength = watch("strength");
  const brewMethod = watch("brewMethod");
  const coffeeUnit = watch("coffeeUnit");
  const waterUnit = watch("waterUnit");

  const ratioRange = useMemo<RatioRange>(() => {
    return BREW_METHOD_RANGES[brewMethod ?? "Pour-over"];
  }, [brewMethod]);

  useEffect(() => {
    if (waterPerServing && coffeeAmount) {
      const newWaterAmount = (servings ?? 0) * (waterPerServing ?? 0);
      console.log(
        "Updating waterAmount:",
        servings,
        waterPerServing,
        "=>",
        newWaterAmount
      );
      setWaterAmount(newWaterAmount);
    }
  }, [waterPerServing, setWaterAmount, servings, coffeeAmount]);

  useEffect(() => {
    const methodKey = (brewMethod ??
      "Pour-over") as keyof typeof BREW_METHOD_RANGES;
    const ratio = BREW_METHOD_RANGES[methodKey];
    const defaultWater = BREW_METHOD_DEFAULTS[methodKey];

    setValue("waterPerServing", defaultWater.waterPerServing);
    setValue("strength", ratio.baseValue);
  }, [brewMethod, setValue]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (waterPerServing && strength && servings) {
      const baseCoffee = waterPerServing / strength;
      const totalCoffee = baseCoffee * servings;
      const convertedCoffee = convertCoffeeUnit(
        totalCoffee,
        "grams",
        coffeeUnit ?? "grams"
      );

      setValue("coffeeAmount", convertedCoffee);
    }
  }, [coffeeUnit, servings, strength, waterPerServing]);

  return {
    watch,
    control,
    handleResetClick,
    waterAmount,
    waterUnit,
    ratioRange,
    strength,
    servings,
    coffeeAmount,
    coffeeUnit,
    convertCoffeeUnit,
    setValue,
  };
};

export default useFormStates;
