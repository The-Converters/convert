interface Color {
  dark: string,
  light: string
}

interface Colors {
  [key: string]: Color
}

export default<Colors> {
  //temp blue
  //mass red
  //distance orange
  // volume purple

  temp: {
    dark: '#1a66b5',
    light: '#1e90ff'
  },
  green: {
    dark: '#306B34',
    light: '#99C24D'
  },
  distance: {
    dark: '#FF7D00',
    light: '#FF934F'
  },
  volume: {
    dark: '#610345',
    light: '#8F3985'
  },
  mass: {
    dark: '#A20D28',
    light: '#EF2D56'
  },
  yellow: {
    dark: '#',
    light: '#'
  },
  background: {
    dark: '#282f40',
    light: '#c9d5f2'
  },
  textMode: {
    dark: '#c9d5f2',
    light: '#282f40'
  }

}
