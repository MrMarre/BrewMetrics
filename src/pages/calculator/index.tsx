"use client";
import Head from "next/head";
import { useState } from "react";
import { convertWater, reverseConvertWater } from "@/utils/unitConversion";

import useFormStates from "../../hooks/useFormStates";
import { RadioGroup } from "@/components/calculations";
import { RangeInput } from "@/components/calculations";
import { NumberField } from "@/components/calculations";
import SectionCard from "../../components/common/SectionCard";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  defaultBrewMethods,
  coffeeUnits,
  waterUnits,
} from "@/constants/brewOptions";
import { Button } from "@/components/ui/button";

export default function Calculator() {
  const {
    watch,
    control,
    handleResetClick,
    waterAmount,
    ratioRange,
    coffeeUnit,
    coffeeAmount,
  } = useFormStates();

  const [showCustomize, setShowCustomize] = useState(false);

  return (
    <div className="overscroll-contain">
      <Head>
        <title>
          Optimal Brew Ratio Calculator | Coffee to Water Ratio Explained
        </title>
      </Head>
      <Button
        className="px-3 py-1 border rounded"
        type="button"
        variant="outline"
        onClick={handleResetClick}
      >
        reset all
      </Button>
      <form className=" mx-auto p-8 flex flex-col gap-8 items-center">
        <Heading as="h1" className="text-3xl font-serif">
          Optimal Brew Ratio Calculator
        </Heading>
        <SectionCard>
          {/* 1. Select Brew Method */}
          <RadioGroup
            control={control}
            name="brewMethod"
            label={
              <Heading as="h2" className="text-2xl mb-6">
                Select Brew Method
              </Heading>
            }
            options={defaultBrewMethods}
            limitAmount={4}
          />
        </SectionCard>
        {/* 2. Adjust Strength */}
        <SectionCard>
          <RangeInput
            label={
              <Heading as="h2" className="text-2xl mb-6">
                Adjust Strength
              </Heading>
            }
            control={control}
            name="strength"
            minValue={ratioRange.min}
            maxValue={ratioRange.max}
          />
        </SectionCard>

        {/* 3. Choose Units */}
        <SectionCard>
          <Heading as="h2" className="text-2xl mb-4">
            Select Units
          </Heading>

          <RadioGroup
            control={control}
            name="waterUnit"
            label={
              <Heading as="h2" className="text-xl text-left my-2">
                Water
              </Heading>
            }
            options={waterUnits}
          />
          <RadioGroup
            control={control}
            name="coffeeUnit"
            label={
              <Heading as="h2" className="text-xl text-left my-2">
                Ground Coffee
              </Heading>
            }
            options={coffeeUnits}
          />
        </SectionCard>

        {/* 4. Choose Number of Servings */}
        <SectionCard>
          <Heading as="h2" className="text-2xl text-center mb-4 ">
            Decide on number of servings
          </Heading>
          <div className="w-full flex justify-center gap-4">
            <div className=" mx-auto">
              <NumberField
                control={control}
                name="servings"
                incrementValue={1}
              />

              {/* 4.1 Dropdown toggle to show or hide custom */}
              <Button
                type="button"
                onClick={() => setShowCustomize((prev) => !prev)}
                className="px-3 py-5 mt-4 text-base md:py-4 w-full max-w-[18rem] border rounded bg-[var(--tertiary)] text-[var(--foreground)] transition-colors duration-300 hover:bg-violet-300"
              >
                {showCustomize ? "Hide" : "Adjust serving size"}
              </Button>
            </div>
          </div>

          {/* 5. Customize Water and Coffee on conditional */}
          {showCustomize && (
            <div className="mt-4 flex justify-center items-center gap-4">
              <div>
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
                  valueFormatter={(value) =>
                    value % 1 === 0 ? value : Number(value).toFixed(2)
                  }
                />
              </div>
            </div>
          )}
        </SectionCard>

        {/* 6. Display Calculated Values */}
        <SectionCard>
          <Heading as="h2" className="text-2xl mb-4">
            Calculated Values
          </Heading>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Coffee</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{`${
                  coffeeAmount ? Number(coffeeAmount).toFixed(2) : ""
                } ${coffeeUnit}`}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Water</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {`${convertWater(
                    waterAmount,
                    watch("waterUnit") ?? "",
                    2
                  )} ${watch("waterUnit")}`}
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionCard>
      </form>
    </div>
  );
}
