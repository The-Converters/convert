// import 

// export const conversion = (
//   typeOfConversion: string, 
//   fromUnits: string,
//   toUnits: string,
//   value: string
// ): string => {
//   metric = conversions[typeOfConversion
//   ][fromUnits].to(value)
//   return conversions[toUnits].from(metric)
// }
import { units } from '../config/conversions'

export const convert = (typeOfConversion: string, fromUnits: string, toUnits: string, value: string): string => {
  const metric = units[typeOfConversion][fromUnits].to(Number(value))
  return units[typeOfConversion][toUnits].from(metric).toFixed(2)
}
