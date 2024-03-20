import { useAtom } from 'jotai'
import React from 'react'
import { currentMode, modes } from '../../../globalConstants/currentMode'
import { Button } from '../../../ui/Button'

export const Home = () => {
  const [, setMode] = useAtom(currentMode)

  const switchToEditMode = () => {
    setMode(modes.EDIT)
  }

  return (
    <div className="m-4 absolute top-0 z-10">
      <Button title={'Custom this'} onClick={switchToEditMode} />
    </div>
  )
}
