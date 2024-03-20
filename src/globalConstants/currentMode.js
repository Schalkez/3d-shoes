import { atom } from 'jotai'

export const modes = {
  HOME: 0,
  EDIT: 1
}

export const currentMode = atom(modes.HOME)
