"use client";
import Scene from "@/app/Scene";
import { Canvas } from "@react-three/fiber";

export default function Home() {
	return (
		<div className=" w-screen h-screen bg-gradient-to-r from-[#FFB88C] to-[#DE6262]">
			<Canvas camera={{ position: [0, 2, 10], fov: 25 }}>
				<Scene />
			</Canvas>
		</div>
	);
}
