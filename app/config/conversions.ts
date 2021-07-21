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
      toSI: (meters: number)=> meters,
      fromSI: (meters: number) => meters
    },
    miles:{
      toSI: (miles: number) => miles * 1609.34,
      fromSI: (miles: number) => miles * 1609.34
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
      toSI: (yards: number) => yards / 1.09361,
      fromSI: (yards: number) => yards * 1.09361
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

  }
}
