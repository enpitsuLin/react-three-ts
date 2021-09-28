import { Sky, softShadows } from "@react-three/drei";
import React from "react";
import Ground from "./Ground";

softShadows();

interface SceneProps {
	gridHelper?: boolean;
	axesHelper?: boolean;
	skyBox?: boolean;
}
const defaultProp: SceneProps = { gridHelper: true, axesHelper: true, skyBox: true };

const Scene: React.FC<SceneProps> = (props = defaultProp) => {
	const { gridHelper, axesHelper, skyBox } = props;
	return (
		<>
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
			{gridHelper && <gridHelper />}
			{axesHelper && <axesHelper />}
			{skyBox && <Sky azimuth={1} inclination={0.6} distance={1000} />}
			<Ground />
			{props.children}
		</>
	);
};
Scene.defaultProps = defaultProp;
export default Scene;
