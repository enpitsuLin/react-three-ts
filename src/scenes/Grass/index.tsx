import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import Grass from "./components/Grass";
import Scene from "../../components/Scene";

const GrassPage: React.FC = () => (
	<Canvas camera={{ position: [15, 15, 30] }}>
		<Stats />
		<OrbitControls minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2.5} />
		<Suspense fallback={null}>
			<Scene axesHelper={false} gridHelper={false}>
				<Grass />
			</Scene>
		</Suspense>
	</Canvas>
);

export default GrassPage;
