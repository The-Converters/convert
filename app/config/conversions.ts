interface InnerObject {
  toSI: (number: number) => number;
  fromSI: (number: number) => number;
}

interface UnitItem {
  [key: string]: InnerObject;
}

interface Units {
  [key: string]: UnitItem;
}

export const units: Units = {
  temp: {
    kelvin: {
      toSI: (k: number): number => k,
      fromSI: (k: number): number => k,
    },
    fahrenheit: {
      toSI: (f: number): number => (f + 459.67) * (5 / 9),
      fromSI: (k: number): number => k * (9 / 5) - 459.67,
    },
    celsius: {
      toSI: (c: number): number => c + 273.15,
      fromSI: (k: number): number => k - 273.15,
    },
  },
  distance: {
    meters: {
      toSI: (m: number) => m,
      fromSI: (m: number) => m,
    },
    miles: {
      toSI: (miles: number) => miles * 1609.344,
      fromSI: (m: number) => m / 1609.344,
    },
    kilometers: {
      toSI: (km: number) => km * 1000,
      fromSI: (m: number) => m / 1000,
    },
    furlongs: {
      toSI: (furlongs: number) => furlongs * 201.168,
      fromSI: (m: number) => m / 201.168,
    },
    yards: {
      toSI: (yards: number) => yards / 1.09361329834,
      fromSI: (m: number) => m * 1.09361329834,
    },
    feet: {
      toSI: (feet: number) => feet / 3.280839895,
      fromSI: (m: number) => m * 3.280839895,
    },
  },
  mass: {
    kilograms: {
      toSI: (kg: number) => kg,
      fromSI: (kg: number) => kg,
    },
    pounds: {
      toSI: (lbs: number) => lbs / 2.20462,
      fromSI: (kg: number) => kg * 2.20462,
    },
    ounces: {
      toSI: (oz: number) => oz / 35.27396194958,
      fromSI: (kg: number) => kg * 35.27396194958,
    },
    stone: {
      toSI: (st: number) => st * 6.35029318,
      fromSI: (kg: number) => kg / 6.35029318,
    },
    grams: {
      toSI: (g: number) => g / 1000 ,
      fromSI: (kg: number) => kg * 1000,
    },
  },
  volume: {
    liters: {
      toSI: (l: number) => l,
      fromSI: (l: number) => l,
    },
    gallons: {
      toSI: (gals: number) => gals * 3.78541,
      fromSI: (l: number) => l / 3.78541,
    },
    quarts: {
      toSI: (qts: number) => qts / 1.05669,
      fromSI: (l: number) => l * 1.05669,
    },
    cups: {
      toSI: (cps: number) => cps / 4.22675,
      fromSI: (l: number) => l * 4.22675,
    },
    pints: {
      toSI: (pints: number) => pints / 2.11338,
      fromSI: (l: number) => l * 2.11338,
    },
    tablespoons: {
      toSI: (tbls: number) => tbls / 67.628045,
      fromSI: (l: number) => l * 67.628045,
    },
    teaspoons: {
      toSI: (tsp: number) => tsp / 202.88413621,
      fromSI: (l: number) => l * 202.88413621,
    },
  },
};
