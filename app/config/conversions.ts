interface InnerObject {
  toSI: (number: number) => number;
  fromSI: (number: number) => number;
}

interface UnitItem {
  [key: string]: InnerObject
}

interface Units {
  [key: string]: UnitItem
}


export const units: Units = {
  temp: {
    kelvin: {
      toSI: (degrees: number) : number => degrees,
      fromSI: (degrees: number) : number => degrees
    },
    fahrenheit: {
      toSI: (degrees: number) : number => (degrees+459.67)*(5/9),
      fromSI: (degrees: number) : number => degrees*(9/5)-459.67,
    },
    celsius: {
      toSI: (degrees: number) : number => degrees + 273.15,
      fromSI: (degrees: number) : number => degrees - 273.15
    }
  },
  distance: {
    meters: {
      toSI: (meters: number) => meters,
      fromSI: (meters: number) => meters
    },
    miles:{
      toSI: (miles: number) => miles * 1609.344,
      fromSI: (miles: number) => miles / 1609.344
    },
    kilometers:{
      toSI: (km: number) => km * 1000,
      fromSI: (km: number) => km / 1000
    },
    furlongs:{
      toSI: (furlongs: number) => furlongs * 201.168,
      fromSI: (furlongs: number) => furlongs / 201.168
    },
    yards:{
      toSI: (yards: number) => yards / 1.09361329834,
      fromSI: (yards: number) => yards * 1.09361329834
    },
    feet:{
      toSI: (feet: number) => feet / 3.28084,
      fromSI: (feet: number) => feet * 3.28084
    }
  },
  mass: {
    kilograms: {
      toSI: (kg: number) => kg,
      fromSI: (kg: number) => kg
    },
    pounds: {
      toSI: (lbs: number) => lbs / 2.20462,
      fromSI: (lbs: number) => lbs * 2.20462
    }

  },
  volume: {
    liters: {
      toSI: (l: number) => l,
      fromSI: (l: number) => l
    },
    gallons: {
      toSI: (gals: number) => gals * 3.78541,
      fromSI: (gals: number) => gals / 3.78541
    },
    quarts: {
      toSI: (qts: number) => qts / 1.05669,
      fromSI: (qts: number) => qts * 1.05669
    },
    cups: {
      toSI: (cps: number) => cps / 4.22675,
      fromSI: (cps: number) => cps * 4.22675
    },
    pints: {
      toSI: (pints: number) => pints / 2.11338,
      fromSI: (pints: number) => pints * 2.11338
    }
  }
}
