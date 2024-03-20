import React from 'react'
import { SelectShoesProperties } from './SelectShoesProperties'
import { Home } from './Home'
import { modes, currentMode } from '../../globalConstants/currentMode'
import { useAtom } from 'jotai'

export const HtmlUi = ({ children }) => {
  const [mode] = useAtom(currentMode)

  const isEditMode = mode === modes.EDIT
  const isHomeMode = mode === modes.HOME

  return (
    <div className="h-full w-full">
      {isHomeMode && <Home />}
      {isEditMode && <SelectShoesProperties />}
      <div className="z-0 w-full h-full">{children}</div>
    </div>
  )
}
