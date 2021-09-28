import { MeshProps } from "@react-three/fiber";
import React from "react";

const Head: React.FC<MeshProps> = props => {
	return (
		<mesh position={[-2, 4.8, 0]} {...props}>
			<sphereGeometry args={[0.8, 16, 16]} />
			<meshStandardMaterial color="royalblue" attach="material" />
		</mesh>
	);
};

export default Head;
