import { MeshProps, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

const Box: React.FC<MeshProps> = props => {
	const ref = useRef<THREE.Mesh>(null!);

	const [active, setActive] = useState(false);

	useFrame((state, delta) => (ref.current.rotation.x += 0.01));

	return (
		<mesh ref={ref} scale={active ? 1.5 : 1} onClick={() => setActive(!active)} position={[0, 1.2, 0]} {...props}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="royalblue" attach="material" />
		</mesh>
	);
};
export default Box;
