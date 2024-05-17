import {
	ContactShadows,
	Environment,
	MeshDistortMaterial,
	OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";

export default function Scene() {
	return (
		<>
			<OrbitControls />
			{/* <mesh>
				<boxGeometry />
				<meshBasicMaterial color={"teal"} />
			</mesh> */}

			<Suspense fallback={null}>
				<mesh>
					<sphereGeometry args={[1, 64, 64]} />
					<MeshDistortMaterial clearcoatRoughness={0} metalness={0.1} />
				</mesh>
				<Environment preset="warehouse" />
				<ContactShadows
					rotation={[Math.PI / 2, 0, 0]}
					position={[0, -1.6, 0]}
					opacity={0.4}
					width={15}
					height={15}
					blur={2.5}
					far={1.6}
				/>
			</Suspense>
		</>
	);
}
