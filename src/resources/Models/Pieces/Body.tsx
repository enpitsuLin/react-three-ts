import { MeshProps } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const Body: React.FC<MeshProps> = props => {
	const curve = new THREE.EllipseCurve(0, 2.25, 0.4, 0.4, 0, Math.PI / 2, false, 0);
	const shape = new THREE.Shape([
		...curve.getPoints(12).reverse(),
		new THREE.Vector2(0.4, 2.25),
		new THREE.Vector2(1, 0),
		new THREE.Vector2(0, 0)
	]);

	const points = shape.getPoints();

	return (
		<mesh {...props} position={[0, 0.1, 0]}>
			<latheBufferGeometry args={[points, 60, 0, Math.PI * 2]} />
			<meshStandardMaterial side={THREE.DoubleSide} metalness={0} roughness={1} color="royalblue" attach="material" />
		</mesh>
	);
};

export default Body;
