import { Sky, Environment } from '@react-three/drei'
import { Shoes } from './Shoes/Shoes'
import { Canvas } from '@react-three/fiber'
import { CameraRig } from '../../ui/CameraRig'
import { useAtom } from 'jotai'
import { modes, currentMode } from '../../globalConstants/currentMode'
import { modeProperties } from '../../globalConstants/modeProperties'
import React from 'react'

export const CanvasComponent = () => {
  const [mode] = useAtom(currentMode)

  const position =
    mode === modes.EDIT
      ? modeProperties.EDIT.position
      : modeProperties.HOME.position

  const rotation =
    mode === modes.EDIT
      ? modeProperties.EDIT.rotation
      : modeProperties.HOME.rotation

  const fov =
    mode === modes.EDIT ? modeProperties.EDIT.fov : modeProperties.HOME.fov

  return (
    <Canvas
      shadows="percentage"
      camera={{ fov }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <CameraRig position={position} rotation={rotation}>
        <Shoes />
      </CameraRig>
      <Sky />
      <axesHelper />
      <ambientLight intensity={1} />
      <Environment preset="city" />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}
