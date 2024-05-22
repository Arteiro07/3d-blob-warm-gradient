import { Image, Text } from "@react-three/drei";

import { useRef, useState } from "react";
const GOLDENRATIO = 1.61803398875;

export default function Frame() {
	const frame = useRef<any>(null);
	const image = useRef<any>(null);
	const [hovered, setHover] = useState(false);

	// useFrame(({ clock }) => {
	// 	frame.current.rotation.y = clock.getElapsedTime();
	// 	image.current.rotation.y = clock.getElapsedTime();
	// });

	// useFrame((state, dt) => {
	// 	if (image.current) {
	// 		image.current.material.zoom =
	// 			2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
	// 		easing.damp3(
	// 			image.current.scale,
	// 			[
	// 				0.85 * (!isActive && hovered ? 0.85 : 1),
	// 				0.9 * (!isActive && hovered ? 0.905 : 1),
	// 				1,
	// 			],
	// 			0.1,
	// 			dt
	// 		);
	// 		easing.dampC(
	// 			frame.current.material.color,
	// 			hovered ? "orange" : "white",
	// 			0.1,
	// 			dt
	// 		);
	// 	}
	// });
	return (
		<>
			<mesh
				name={"Arteiro"}
				onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
				onPointerOut={() => setHover(false)}
				scale={[1, GOLDENRATIO, 0.05]}
				position={[2, GOLDENRATIO / 2, 0]}
			>
				<boxGeometry />
				<meshStandardMaterial
					color="#151515"
					metalness={0.5}
					roughness={0.5}
					envMapIntensity={2}
				/>
				<mesh
					ref={frame}
					raycast={() => null}
					scale={[0.9, 0.93, 0.9]}
					position={[0, 0, 0.2]}
				>
					<boxGeometry />
					<meshBasicMaterial toneMapped={false} fog={false} />
				</mesh>
				<Image
					raycast={() => null}
					ref={image}
					position={[0, 0, 0.7]}
					url={"/arteiropx.png"}
				/>
			</mesh>
			<Text
				maxWidth={0.1}
				anchorX="left"
				anchorY="top"
				position={[2.55, GOLDENRATIO, 0]}
				fontSize={0.025}
			>
				Arteiro
			</Text>
		</>
	);
}
