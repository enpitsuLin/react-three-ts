import { Plane } from "@react-three/drei";
import React from "react";

const Ground: React.FC = () => {
	return (
		<>
			<Plane receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]} args={[10, 10, 4, 4]}>
				<shadowMaterial attach="material" opacity={0.5} />
			</Plane>
			<Plane rotation-x={-Math.PI / 2} position={[0, 0, 0]} args={[10, 10, 4, 4]}>
				<meshBasicMaterial attach="material" opacity={0.5} />
			</Plane>
		</>
	);
};

export default Ground;
