import { Suspense } from "react";
import Blob from "./Blob";

export default function Scene() {
	return (
		<>
			<Suspense fallback={null}>
				{/* <Frame /> */}
				<Blob />
			</Suspense>
			{/* <EffectComposer>
				<Noise premultiply blendFunction={BlendFunction.ADD} />
			</EffectComposer>
			<Environment preset="warehouse" />
			<ContactShadows
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, -1.6, 0]}
				opacity={0.4}
				width={15}
				height={15}
				blur={2.5}
				far={1.6}
			/> */}
		</>
	);
}
