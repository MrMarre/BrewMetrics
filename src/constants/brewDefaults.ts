export type BrewDefaults = {
	servings: number;
	waterPerServing: number;
};

export const BREW_METHOD_DEFAULTS: Record<string, BrewDefaults> = {
	"Pour-over": { servings: 1, waterPerServing: 240 },
	"Auto drip": { servings: 1, waterPerServing: 128 },
	"French press": { servings: 1, waterPerServing: 120 },
	V60: { servings: 1, waterPerServing: 250 },
	"Moka Pot": { servings: 1, waterPerServing: 60 },
	Chemex: { servings: 1, waterPerServing: 240 },
	Siphon: { servings: 1, waterPerServing: 240 },
	"Cold Brew": { servings: 1, waterPerServing: 240 },
	AeroPress: { servings: 1, waterPerServing: 135 },
};
