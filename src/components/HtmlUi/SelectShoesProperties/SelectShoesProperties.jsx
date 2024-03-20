import { useAtom } from 'jotai'
import React from 'react'
import { TwitterPicker } from 'react-color'
import { defaultColor } from '../../../globalConstants/selectedColor'
import { currentMode, modes } from '../../../globalConstants/currentMode'

export const SelectShoesProperties = () => {
  const [selectedColor, setSelectedColor] = useAtom(defaultColor)
  const [, setMode] = useAtom(currentMode)

  const switchBackHome = () => {
    setMode(modes.HOME)
  }

  const handleSelectColor = (color) => {
    setSelectedColor(color)
  }

  return (
    <div className="m-4 absolute top-0 z-10">
      <button onClick={switchBackHome}>back</button>
      <TwitterPicker
        onChange={handleSelectColor}
        color={selectedColor}
        triangle="hide"
      />
    </div>
  )
}
