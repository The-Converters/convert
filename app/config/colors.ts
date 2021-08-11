interface Color {
  regular: string,
  light: string
}

interface Colors {
  [key: string]: Color
}


export default {
  //temp blue
  //mass red
  //distance orange
  // volume purple

  temp: {
    regular: '#1a66b5',
    light: '#1e90ff'
  },
  green: {
    regular: '#306B34',
    light: '#99C24D'
  },
  distance: {
    regular: '#FF7D00',
    light: '#FF934F'
  },
  volume: {
    regular: '#610345',
    light: '#8F3985'
  },
  mass: {
    regular: '#A20D28',
    light: '#EF2D56'
  },
  yellow: {
    regular: '#',
    light: '#'
  }

}
