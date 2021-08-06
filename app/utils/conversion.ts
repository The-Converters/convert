
import { units } from '../config/conversions'

export const convert = (
  typeOfConversion: string,
  fromUnits: string,
  toUnits: string,
  value: string): string => {
  const SIUnits = units[typeOfConversion][fromUnits].toSI(Number(value))
  return (Math.round(units[typeOfConversion][toUnits].fromSI(SIUnits) * 10000) / 10000).toString()
}
