import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls } from "@react-three/drei";
import { Shoes } from "./Shoes/Shoes";

export const CanvasComponent = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
      <Shoes />
      <BakeShadows />
      <OrbitControls makeDefault autoRotate />
    </Canvas>
  );
};
