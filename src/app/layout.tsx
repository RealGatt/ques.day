import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ques.day",
	description: "Is it time to queue Open Queue?!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<footer className="absolute bottom-2 left-0 right-0 w-[90vw] mx-auto flex flex-col place-items-center">
					<div className="bg-black/20 shadow rounded-full flex flex-row gap-4 place-items-center p-4 text-md text-gray-300">
						<Link
							href="https://www.twitch.tv/dix0nm8"
							target="_blank"
							className="hover:underline"
						>
							<div>Dixon Twitch</div>
						</Link>
						<Link
							href="https://twitter.com/dix0nm8/"
							target="_blank"
							className="hover:underline"
						>
							<div>Dixon 𝕏</div>
						</Link>
					</div>
				</footer>
			</body>
		</html>
	);
}
