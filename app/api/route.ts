import { rss } from './rss';
import { isFramerSite } from './utils/is-framer-site';

export async function GET(request: Request) {

	// TODO: get this from query param
	const url = "https://www.helmer.app/blog";

	const isFramer = await isFramerSite(url);

	if (!isFramer) {
		return Response.json({
			body: "Could not find a Framer site at the given URL",
			headers: {
					'Content-Type': 'text/plain',
			},
			isBase64Encoded: false,
			statusCode: 400,
		})
	}

	const body = await rss(url);

	return Response.json({
		body,
		headers: {
				'Content-Type': body ? 'application/rss+xml' : 'text/plain',
		},
		isBase64Encoded: false,
		statusCode: body ? 200 : 400,
	})
}