import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import Box from "../../resources/Geometries/Box";
import Scene from "../../components/Scene";
import Ground from "./components/Ground";
import Head from "../../resources/Geometries/Pieces/Head";
import Body from "../../resources/Geometries/Pieces/Body";

const SimplePage: React.FC = () => (
	<Canvas
		shadows
		onCreated={({ gl }) => {
			gl.setClearColor("#252934");
		}}
		camera={{ position: [0, 5, 10], near: 0.5, far: 500, zoom: 1, fov: 60 }}
	>
		<Stats />
		<OrbitControls />
		<Box castShadow position={[2, 1.2, 0]} />
		<Head castShadow />
		<Body castShadow />
		<Suspense fallback={null}>
			<Scene skyBox={false}>
				<Ground />
			</Scene>
		</Suspense>
	</Canvas>
);

export default SimplePage;
