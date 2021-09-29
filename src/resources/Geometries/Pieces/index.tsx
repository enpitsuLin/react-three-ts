import React from "react";
import { GroupProps } from "@react-three/fiber";
import Body from "./Body";
import Head from "./Head";

const Pieces: React.FC<GroupProps> = props => {
	return (
		<group {...props}>
			<Head castShadow />
			<Body castShadow />
		</group>
	);
};

export default Pieces;
