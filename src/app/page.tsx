"use server";

import QuesdayBlock from "@/components/quesday";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default async function Home() {
	return (
		<main className="bg-neutral-800 flex min-h-screen flex-col items-center justify-between p-24">
			<div className="h-full w-full rounded-mdrelative flex flex-col items-center justify-center antialiased">
				<div className="bg-neutral-900 rounded-md max-w-4xl mx-auto m-10 p-6 flex flex-col gap-2 place-items-center">
					<h1 className="relative z-10 p-4 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-teal-200 to-teal-600 text-center font-sans font-bold">
						Is it Open Quesday?
					</h1>
					<div className="place-items-center">
						<Image
							src="/favicon.ico"
							unoptimized
							width={128}
							height={128}
							alt="Overwatch Champion Icon"
						/>
					</div>

					<QuesdayBlock />
				</div>
			</div>
			<BackgroundBeams />
		</main>
	);
}
