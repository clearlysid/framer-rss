import type { Context, Config } from "@netlify/functions";
import { isFramerSite, fetchSite, createRssFeed } from "../rss/utils.mjs";

export default async (req: Request, context: Context) => {
	// // Step 1: Specify blog URL
	// const requestUrl = req.url;
	// const url = "https://www.helmer.app/blog";

	// // Step 2: Fetch the site and check if it's a Framer site
	// const $ = await fetchSite(url);
	// const isFramer = await isFramerSite($);
	// if (!isFramer) {
	// 	return Response.json({
	// 		body: "Could not find a Framer site at the given site",
	// 		headers: {
	// 			"Content-Type": "text/plain",
	// 		},
	// 		isBase64Encoded: false,
	// 		statusCode: 400,
	// 	});
	// }

	// Step 3: Generate the RSS feed
	// const body = await createRssFeed($, url, requestUrl);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
    <channel>
        <title>Helmer Blog</title>
        <atom:link href="https://framer-rss.netlify.app/api/helmer" rel="self" type="application/rss+xml"/>
        <link>https://www.helmer.app/blog</link>
        <description>From the writer's desk..</description>
       <lastBuildDate>Tue, 11 Jun 2024 14:05:21 GMT</lastBuildDate>
        <language>en-US</language>
        <generator>framer-rss</generator>
        <item>
            <title>Rise of the GIFs</title>
            <link>https://www.helmer.app/blog/a-brief-history-of-gifs</link>
            <dc:creator><![CDATA[Shamika]]></dc:creator>
            <pubDate>Fri, 03 May 2024 18:59:53 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://www.helmer.app/blog/a-brief-history-of-gifs</guid>
            <description><![CDATA[<p>It’s often said that America has not been this divided since the Civil War, but even these tumultuous times pale in comparison to the social unrest of the 1960s, when post-war America’s cleavages along race, gender, and sexuality threatened to rip the nation apart. Within ten short years, the United States saw the unfolding of [...]</p>]]</description>
        </item>
        <item>
            <title>Introducing Helmer]</title>
            <link>https://www.helmer.app/blog/story</link>
            <dc:creator><![CDATA[Sid]]></dc:creator>
            <pubDate>Wed, 10 Jan 2024 00:00:00 GMT</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">hhttps://www.helmer.app/blog/story</guid>
            <description><![CDATA[<p>According to superstition, good luck comes to those who wear at least one new article of clothing on Easter Sunday, the official start of spring (style-wise). For years, I wrote spring style guides for various publications, including Put This On, but as menswear has become balkanized into tiny little communities, I&#8217;ve found it better to [...]</p>
]]></description>
        </item>
    </channel>
</rss>`;

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
