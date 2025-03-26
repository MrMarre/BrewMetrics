export type RatioRange = {
  min: number;
  max: number;
  baseValue: number;
  step: number;
};
// recommended range, with preferred baseline
export const BREW_METHOD_RANGES: Record<string, RatioRange> = {
  "Pour-over": { min: 15, baseValue: 16, max: 17, step: 1 },
  "Auto drip": { min: 14, baseValue: 16, max: 17, step: 1 },
  "French press": { min: 12, baseValue: 15, max: 18, step: 1 },
  V60: { min: 14, baseValue: 16, max: 18, step: 1 },
  "Moka Pot": { min: 7, baseValue: 10, max: 12, step: 1 },
  Chemex: { min: 10, baseValue: 15, max: 21, step: 1 },
  Siphon: { min: 12, baseValue: 15, max: 16, step: 1 },
  "Cold Brew": { min: 8, baseValue: 11, max: 15, step: 1 },
  AeroPress: { min: 12, baseValue: 15, max: 18, step: 1 },
};
