export type Mode = 'light' | 'dark'

export type Params = {
  Welcome: undefined,
  Convert: {conversion: string, mode: Mode},
  About: {mode: Mode}
}
