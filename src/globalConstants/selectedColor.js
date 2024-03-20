import { atom } from 'jotai'

export const defaultColor = atom({
  hsl: {
    h: 24.705882352941174,
    s: 1,
    l: 0.5,
    a: 1
  },
  hex: '#ff6900',
  rgb: {
    r: 255,
    g: 105,
    b: 0,
    a: 1
  },
  hsv: {
    h: 24.705882352941174,
    s: 1,
    v: 1,
    a: 1
  },
  oldHue: 24.705882352941174,
  source: 'hex'
})
