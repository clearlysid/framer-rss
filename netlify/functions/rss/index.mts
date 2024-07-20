import type { Context, Config } from "@netlify/functions";
import { rss } from "./rss.mjs";
import { isFramerSite, fetchSite } from "./utils.mjs";

export default async (req: Request, context: Context) => {
	// Step 1: Get URL from query params
	const { searchParams } = new URL(req.url);
	const url = searchParams.get("site");

	console.log("api hit");

	// Return not found error if the 'site' query param is missing
	if (!url) {
		return Response.json({
			body: "Missing 'site' query param",
			headers: {
				"Content-Type": "text/plain",
			},
			isBase64Encoded: false,
			statusCode: 400,
		});
	}

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
	const body = await rss($, url);

	// Step 4: Return the RSS feed
	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": "application/rss+xml",
			"Netlify-CDN-Cache-Control":
				"public, durable, max-age=60, stale-while-revalidate=120",
		},
	});
};

export const config: Config = {
	path: "/rss",
};
