import { MeshProps } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

const Body: React.FC<MeshProps> = props => {
	const headSize = 0.8;
	const bodyBottomGeometry = new THREE.CylinderBufferGeometry(headSize * 0.9, (headSize * 1.2) / 2, headSize * 2.5, 16);
	bodyBottomGeometry.translate(0, headSize * 1.25, 0);
	const bodyCenterGeometry = new THREE.CylinderBufferGeometry(headSize, headSize * 0.9, headSize, 16);
	bodyCenterGeometry.translate(0, headSize * 3, 0);
	const bodyTopGeometry = new THREE.SphereGeometry(headSize, 16, 16);
	bodyTopGeometry.translate(0, headSize * 3.5, 0);

	const body = useMemo<THREE.BufferGeometry>(() => {
		const base = mergeBufferGeometries([bodyBottomGeometry, bodyCenterGeometry, bodyTopGeometry]);

		return base;
	}, [bodyBottomGeometry, bodyCenterGeometry, bodyTopGeometry]);
	return (
		<mesh position={[0, 1.2, 0]} geometry={body} {...props}>
			<meshStandardMaterial color="royalblue" attach="material" />
		</mesh>
	);
};

export default Body;
