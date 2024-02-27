/** @type {import('next').NextConfig} */

const nextConfig = {
	swcMinify: true,
	reactStrictMode: false,
	compress: true,
	outputFileTracing: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
};

export default nextConfig;
