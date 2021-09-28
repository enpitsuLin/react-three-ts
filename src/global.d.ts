import { ReactThreeFiber } from "@react-three/fiber";
import GrassMaterial from "./resources/Materials/GrassMaterial";

declare global {
	/**
	 * @description 使自定义的ShaderMaterial支持`@react-three/fiber`元素
	 */
	namespace JSX {
		interface IntrinsicElements {
			grassMaterial: ReactThreeFiber.ShaderMaterialProps<GrassMaterial, typeof GrassMaterial>;
		}
	}
}
