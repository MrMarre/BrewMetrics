export const stringStripper = (count: number | undefined, single: string) => {
  return `${count} ${count === 1 ? single : `${single}s`}`;
};
