export const fahrenheitToCelsius = (fahrenHeit: string) => (Math.round((Number(fahrenHeit)-32)*(5/9)*100)/100).toString()

export const celsiusToFahrenheit = (celsius: string) => (Math.round((Number(celsius)*(9/5)+32)*100)/100).toString()
