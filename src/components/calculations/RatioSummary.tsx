import { stringStripper } from "@/utils/stringConversion";

type RatioSummaryProps = {
  strength: number | undefined;
  servings: number | undefined;
  brewMethod: string | undefined;
};

const RatioSummary = ({
  strength,
  brewMethod,
  servings,
}: RatioSummaryProps) => {
  return (
    <p className="text-base">
      Your ratio of
      <span className="mx-1 px-1 bg-violet-200 rounded font-bold">{`1 : ${strength}`}</span>
      for
      <span className="mx-1 px-1 bg-violet-200 rounded font-bold">
        {brewMethod}
      </span>
      brews
      <span className=" px-1 font-bold">
        {`${stringStripper(servings, "serving")}`}.
      </span>
    </p>
  );
};

export default RatioSummary;
