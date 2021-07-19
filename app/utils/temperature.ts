export const fahrenheitToCelsius = (fahrenHeit: string): string => ((Number(fahrenHeit)-32)*(5/9)).toFixed(2)

export const celsiusToFahrenheit = (celsius: string): string => (Number(celsius)*(9/5)+32).toFixed(2)
