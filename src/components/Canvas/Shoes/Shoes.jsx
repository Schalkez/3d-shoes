import { Shoe } from './Shoe'
import React, { Suspense } from 'react'

export const Shoes = () => {
  return (
    <Suspense fallback={null}>
      {/* <Stage> */}
      <group>
        <Shoe position={[0, 0, 0]} />
        <Shoe scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} />
      </group>
      {/* </Stage> */}
    </Suspense>
  )
}
