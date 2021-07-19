interface OptionItem {
  [key: string]: string[];
}

export const measurements: OptionItem =  {
  temp: ['fahrenheit', 'celsius', 'kelvin'],
  distance: ['miles', 'kilometers', 'furlongs', 'yards', 'feet']
}
