"use client";
import Head from "next/head";
import { useState } from "react";
import { convertWater, reverseConvertWater } from "@/utils/unitConversion";
import useFormStates from "../../hooks/useFormStates";
import {
  RadioGroup,
  RangeInput,
  NumberField,
  RatioSummary,
} from "@/components/calculations";
import {
  defaultBrewMethods,
  coffeeUnits,
  waterUnits,
} from "@/constants/brewOptions";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardSection from "@/components/common/CardSection";

export default function Calculator() {
  const {
    watch,
    control,
    handleResetClick,
    waterAmount,
    ratioRange,
    coffeeUnit,
    coffeeAmount,
    isTouched,
  } = useFormStates();

  const [showCustomize, setShowCustomize] = useState(false);

  return (
    <div className="w-full max-w-4xl px-4 py-8 mx-auto">
      <Head>
        <title>
          Optimal Brew Ratio Calculator | Coffee to Water Ratio Explained
        </title>
      </Head>
      <form className="flex flex-col items-center w-full">
        <Heading as="h1" className="mb-6 font-serif text-3xl">
          Optimal Brew Ratio Calculator
        </Heading>
        <div className="flex flex-col w-full max-w-md gap-4">
          {/* Section layout */}
          {/* 1. Select Brew Method */}
          <CardSection header="Select Brew Method">
            <RadioGroup
              control={control}
              name="brewMethod"
              options={defaultBrewMethods}
              limitAmount={4}
            />
          </CardSection>
          {/* 2. Adjust Strength in range */}
          <CardSection header="Adjust Strength">
            <RangeInput
              control={control}
              name="strength"
              minValue={ratioRange.min}
              maxValue={ratioRange.max}
            />
          </CardSection>
          {/* 3. Choose Units */}
          <CardSection header="Select Units">
            <RadioGroup
              control={control}
              name="waterUnit"
              label="Water"
              labelProps={{
                className: "text-xl text-left my-2",
              }}
              // <Heading as="h2" className="my-2 text-xl text-left">

              // {/* </Heading> */}

              options={waterUnits}
            />
            <RadioGroup
              control={control}
              name="coffeeUnit"
              label="Ground Coffee"
              labelProps={{
                className: "text-xl text-left my-2",
              }}
              options={coffeeUnits}
            />
          </CardSection>
          {/* 4. Choose Number of Servings */}
          <CardSection header="Decide Number of Servings">
            <div className="flex justify-center w-full gap-4">
              <div className="mx-auto ">
                <NumberField
                  control={control}
                  name="servings"
                  incrementValue={1}
                />

                {/* 4.1 Dropdown toggle to show or hide custom */}
                <Button
                  type="button"
                  onClick={() => setShowCustomize((prev) => !prev)}
                  className="px-3 py-5 mt-4 text-base md:py-4 w-full border rounded bg-[var(--tertiary)] text-[var(--foreground)] transition-colors duration-300 hover:bg-violet-300"
                >
                  {showCustomize ? "Hide" : "Adjust serving size"}
                </Button>
              </div>
            </div>

            {/* 5. Customize Water and Coffee on conditional */}
            {showCustomize && (
              <div className="flex items-center justify-center gap-4 mt-4">
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
          </CardSection>
          {/* 6. Display Calculated Values with Shadcn Card */}
          <CardSection header="Calculated Values">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                      2,
                    )} ${watch("waterUnit")}`}
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-4">
              <CardContent>
                <RatioSummary
                  strength={watch("strength")}
                  servings={watch("servings")}
                  brewMethod={watch("brewMethod")}
                />
              </CardContent>
            </Card>
          </CardSection>
        </div>
        {isTouched && (
          <Button
            className="px-3 py-1 border rounded"
            type="button"
            variant="outline"
            onClick={handleResetClick}
          >
            Reset all
          </Button>
        )}
      </form>
    </div>
  );
}
