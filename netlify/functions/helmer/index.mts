import type { Context, Config } from "@netlify/functions";
import { isFramerSite, fetchSite, createRssFeed } from "../rss/utils.mjs";

export default async (req: Request, context: Context) => {
	// Step 1: Specify blog URL
	const requestUrl = req.url;
	const url = "https://www.helmer.app/blog";

	// Step 2: Fetch the site and check if it's a Framer site
	const $ = await fetchSite(url);
	const isFramer = await isFramerSite($);
	if (!isFramer) {
		return Response.json({
			body: "Could not find a Framer site at the given site",
			headers: {
				"Content-Type": "text/plain",
			},
			isBase64Encoded: false,
			statusCode: 400,
		});
	}

	// Step 3: Generate the RSS feed
	const body = await createRssFeed($, url, requestUrl);

	// Step 4: Return the RSS feed
	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": "application/rss+xml",
			"Netlify-CDN-Cache-Control":
				"public, durable, max-age=86400, stale-while-revalidate=120",
		},
	});
};

export const config: Config = {
	path: "/api/helmer",
};
