import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Sky } from "@react-three/drei";
import Scene from "./components/Scene";
import Box from "./resources/Geometries/Box";

const App: React.FC = () => (
	<Canvas
		shadows
		onCreated={({ gl }) => {
			gl.setClearColor("#252934");
		}}
		camera={{ position: [0, 2, 10], near: 0.1, far: 1000, zoom: 1, fov: 50 }}
	>
		<Sky sunPosition={[500, 150, -1000]} turbidity={0.1} />
		<Stats />
		<OrbitControls />
		<Box />
		<Suspense fallback={null}>
			<Scene />
		</Suspense>
	</Canvas>
);

export default App;
