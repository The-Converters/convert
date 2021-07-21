
import { units } from '../config/conversions'

export const convert = (
  typeOfConversion: string,
  fromUnits: string,
  toUnits: string,
  value: string): string => {
  const SIUnits = units[typeOfConversion][fromUnits].toSI(Number(value))
  return units[typeOfConversion][toUnits].fromSI(SIUnits).toFixed(2)
}
