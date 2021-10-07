import React from "react";
import { GroupProps } from "@react-three/fiber";
import Body from "./Body";
import Head from "./Head";
import { ConvexPolyhedronProps } from "@react-three/cannon";
import { Geometry } from "three-stdlib/deprecated/Geometry";

function toConvexProps(bufferGeometry: THREE.BufferGeometry): ConvexPolyhedronProps["args"] {
	const geo = new Geometry().fromBufferGeometry(bufferGeometry);
	geo.mergeVertices();
	return [geo.vertices.map(v => [v.x, v.y, v.z]), geo.faces.map(f => [f.a, f.b, f.c]), []];
}

const Pieces: React.FC<GroupProps> = props => {
	
	return (
		<group {...props}>
			<Head castShadow />
			<Body castShadow />
		</group>
	);
};

export default Pieces;
