import { Stage } from "@react-three/drei";
import { Shoe } from "./Shoe";

export const Shoes = () => {
  return (
    <Stage environment="city" intensity={0.6}>
      <Shoe position={[0, 0, 0]} />
      <Shoe scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} />
    </Stage>
  );
};
