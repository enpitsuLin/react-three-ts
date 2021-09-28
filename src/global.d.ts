import { ReactThreeFiber } from "@react-three/fiber";
import GrassMaterial from "./resources/Materials/GrassMaterial";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			grassMaterial: ReactThreeFiber.ShaderMaterialProps<GrassMaterial, typeof GrassMaterial>;
		}
	}
}
