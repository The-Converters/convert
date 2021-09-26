import { units } from "../config/conversions";

const multiplier = (input: string): number =>
  input.indexOf(".") > -1 && input.indexOf(".") < input.length - 4
    ? Math.pow(10, input.split(".")[1].length)
    : 10000;

export const convert = (
  typeOfConversion: string,
  fromUnits: string,
  toUnits: string,
  value: string
): string => {
  const places: number = multiplier(value);
  const SIUnits = units[typeOfConversion][fromUnits].toSI(Number(value));
  return (
    Math.round(units[typeOfConversion][toUnits].fromSI(SIUnits) * places) /
    places
  ).toString();
};
