import { MeshProps, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Head: React.FC<MeshProps> = props => {
	const headRef = useRef<THREE.Mesh>(null);

	useFrame(state => {
		if (!headRef.current) return;
		const t = state.clock.getElapsedTime();
		headRef.current.position.y = THREE.MathUtils.lerp(headRef.current.position.y, 3.5 + Math.sin(t) / 8, 0.2);
	});
	return (
		<mesh {...props} ref={headRef} position={[0, 3.5, 0]}>
			<sphereGeometry args={[0.575, 30, 30]} />
			<meshStandardMaterial color="royalblue" attach="material" />
		</mesh>
	);
};

export default Head;
