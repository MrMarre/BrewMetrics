import useFormStates from "@/hooks/useFormStates";
import { stringStripper } from "@/utils/stringConversion";

type RatioSummaryProps = {
  strength: number | undefined;
  servings: number | undefined;
  brewMethod: string | undefined;
};

export default function RatioSummary({
  strength,
  brewMethod,
  servings,
}: RatioSummaryProps) {
  return (
    <p className="text-base">
      Your ratio of{" "}
      <span className="mx-1 px-1 bg-violet-200 font-bold">{`1 : ${strength}`}</span>
      for
      <span className="mx-1 px-1 bg-violet-200 font-bold">{brewMethod}</span>
      brews
      <span className="mx-1 px-1 bg-violet-200 font-bold">{`${stringStripper(
        servings,
        "serving"
      )}`}</span>
    </p>
  );
}
