import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import Box from "../../resources/Geometries/Box";
import Scene from "../../components/Scene";
import Ground from "./components/Ground";

const SimplePage: React.FC = () => (
	<Canvas
		shadows
		onCreated={({ gl }) => {
			gl.setClearColor("#252934");
		}}
		camera={{ position: [0, 2, 10], near: 0.1, far: 1000, zoom: 1, fov: 50 }}
	>
		<Stats />
		<OrbitControls />
		<Box castShadow />
		<Suspense fallback={null}>
			<Scene skyBox={false}>
				<Ground />
			</Scene>
		</Suspense>
	</Canvas>
);

export default SimplePage;
