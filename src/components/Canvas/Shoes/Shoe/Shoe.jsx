import * as THREE from 'three'
import { useGLTF, Text } from '@react-three/drei'
import { useAtom } from 'jotai'
import React from 'react'
import { defaultColor } from '../../../../globalConstants/selectedColor'

export const Shoe = ({ ...props }) => {
  const [selectedColor] = useAtom(defaultColor)

  const { nodes, materials } = useGLTF('/shoe.gltf')
  // console.log(materials);
  // console.log(nodes);
  // console.log(defaultColor);

  // console.log(selectedColor);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-envMapIntensity={0.8}
      />
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry}>
        <meshStandardMaterial
          color={selectedColor.hex}
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>
      <Text
        scale={[0.1, 0.1, 0.1]}
        color="black" // default
        position={[1, 1, 1]}
      >
        HELLO WORLD
      </Text>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-envMapIntensity={0.8}
      />
    </group>
  )
}
