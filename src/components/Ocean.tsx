import THREE from "three";
import React, { useMemo, useRef } from "react";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Water } from "three-stdlib";

extend({ Water });

const Ocean: React.FC = () => {
	const ref = useRef();
	const gl = useThree(state => state.gl);
	const waterNormals = useLoader(THREE.TextureLoader, "@/resources/Materials/waternormals.jpg");
	waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
	const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
	const config = useMemo(
		() => ({
			textureWidth: 512,
			textureHeight: 512,
			waterNormals,
			sunDirection: new THREE.Vector3(),
			sunColor: 0xffffff,
			waterColor: 0x001e0f,
			distortionScale: 3.7,
			fog: false,
			format: gl.encoding
		}),
		[waterNormals]
	);
	useFrame((state, delta) => ref.current);
	return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
};

export default Ocean;
