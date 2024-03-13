import { Stage } from "@react-three/drei";
import { Shoe } from "./Shoe";

export const Shoes = ({ leftOneColor = "red", rightOneColor = "blue" }) => {
  return (
    <Stage environment="city" intensity={0.6}>
      <Shoe color={leftOneColor} position={[0, 0, 0]} />
      <Shoe
        color={rightOneColor}
        scale={-1}
        rotation={[0, 0.5, Math.PI]}
        position={[0, 0, -2]}
      />
    </Stage>
  );
};
