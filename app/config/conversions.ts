

export const temperature = {

}

export const distance = {
  miles: {
    to: (miles: string) => {},
    from: (meters: string) => {}
  },
}
const type: string = 'miles'
const toFrom: string = 'to'



export const units = {
  temp: {
    fahrenheit: {
      to: (degrees: number) : number => (degrees-32)*(5/9),
      from: (degrees: number) : number => degrees*(9/5)+32,
    },
    kelvin: {
      to: (degrees: number) : number => degrees - 273.15,
      from: (degrees: number) : number => degrees + 273.15
    },
    celsius: {
      to: (degrees: number): number => degrees,
      from: (degrees: number): number => degrees
    }
  },
  distance: {
    miles:{
      to: (miles: number)=> miles * 1609.34,
      from: (miles: number) => miles * 1609.34
    },
    kilometers:{
      to: (km: number)=> km * 1000,
      from: (km: number) => km / 1000
    },
    furlongs:{
      to: (furlongs: number)=> furlongs * 201.168,
      from: (furlongs: number)=> furlongs / 201.168
    },
    yards:{
      to: (yards: number)=> yards / 1.09361,
      from: (yards: number) => yards * 1.09361
    },
    feet:{
      to: (feet: number)=> feet / 3.28084,
      from: (feet: number) => feet * 3.28084
    },
    meters: {
      to: (meters: number)=> meters,
      from: (meters: number) => meters
    }
    
  }
}
