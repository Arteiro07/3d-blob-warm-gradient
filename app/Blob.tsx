import { MeshDistortMaterial } from "@react-three/drei";

export default function Blob() {
	return (
		<>
			<mesh position={[-2, 0, 0]} scale={1.5}>
				<sphereGeometry args={[1, 64, 64]} />
				<MeshDistortMaterial
					color={"orange"}
					clearcoatRoughness={0.1}
					metalness={0.1}
					distort={0.7}
					speed={1}
				/>
			</mesh>
		</>
	);
}
