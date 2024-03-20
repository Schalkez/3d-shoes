import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export const CameraRig = ({ children, position, rotation }) => {
  const group = useRef()

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, position, 0.25)
    easing.dampE(
      group.current.rotation,
      [
        state.pointer.y / 25 + rotation.x,
        -state.pointer.x / 20 + rotation.y,
        0 + rotation.z
      ],
      0.25,
      delta
    )
  })

  return <group ref={group}>{children}</group>
}
