/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/signup',
				destination: '/',
				permanent: true,
			}
		]
	}
}

export default nextConfig
