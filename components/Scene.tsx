import { OrbitControls } from "@react-three/drei";

export default function Scene() {
	return (
		<>
			<OrbitControls />
			<mesh>
				<boxGeometry />
				<meshBasicMaterial color={"teal"} />
			</mesh>
		</>
	);
}
