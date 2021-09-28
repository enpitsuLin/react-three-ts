import { Sky, softShadows } from "@react-three/drei";
import React from "react";
import Ground from "./Ground";

softShadows();

const Scene: React.FC = () => (
	<>
		<fog attach="fog" args={["white", 0, 40]} />
		<ambientLight intensity={0.4} />
		<directionalLight
			castShadow
			position={[2.5, 8, 5]}
			intensity={1.5}
			shadow-mapSize-width={1024}
			shadow-mapSize-height={1024}
			shadow-camera-far={50}
			shadow-camera-left={-10}
			shadow-camera-right={10}
			shadow-camera-top={10}
			shadow-camera-bottom={-10}
		/>
		<gridHelper />
		<axesHelper />
		<Sky azimuth={1} inclination={0.6} distance={1000} />
		<Ground />
	</>
);

export default Scene;
