import { rss } from './rss';
import { isFramerSite } from './utils/is-framer-site';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const url = searchParams.get('site')

	if (!url) {
		return Response.json({
			body: "Missing 'site' query param",
			headers: {
					'Content-Type': 'text/plain',
			},
			isBase64Encoded: false,
			statusCode: 400,
		})
	}

	const isFramer = await isFramerSite(url);

	if (!isFramer) {
		return Response.json({
			body: "Could not find a Framer site at the given site",
			headers: {
					'Content-Type': 'text/plain',
			},
			isBase64Encoded: false,
			statusCode: 400,
		})
	}

	const body = await rss(url);

	return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' }
  })
}