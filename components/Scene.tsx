import {
	ContactShadows,
	Environment,
	MeshDistortMaterial,
} from "@react-three/drei";
import { Suspense } from "react";

export default function Scene() {
	return (
		<>
			<Suspense fallback={null}>
				<mesh position={[-2, 0, 0]} scale={1.5}>
					<sphereGeometry args={[1, 64, 64]} />
					<MeshDistortMaterial
						clearcoatRoughness={0.1}
						metalness={0.1}
						distort={0.7}
						speed={1}
					/>
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
