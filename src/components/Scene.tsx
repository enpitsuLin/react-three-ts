import React from "react";

const Scene: React.FC = () => (
	<>
		<ambientLight intensity={0.1} />
		<directionalLight position={[0, 0, 5]} />
		<gridHelper />
		<axesHelper />
	</>
);

export default Scene;
