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
        <title>Die, Workwear!</title>
        <atom:link href="https://dieworkwear.com/feed/" rel="self" type="application/rss+xml"/>
        <link>http://oxs.335.myftpupload.com/</link>
        <description>A blog about menswear</description>
        <lastBuildDate>Wed, 26 Jun 2024 23:16:29 +0000</lastBuildDate>
        <language>en-US</language>
        <sy:updatePeriod>hourly</sy:updatePeriod>
        <sy:updateFrequency>1</sy:updateFrequency>
        <generator>https://wordpress.org/?v=6.5.5</generator>
        <item>
            <title>American Space Cowboys</title>
            <link>https://dieworkwear.com/2024/05/03/american-space-cowboys/</link>
            <dc:creator><![CDATA[divert-brew-diagonal]]></dc:creator>
            <pubDate>Fri, 03 May 2024 18:59:53 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=12137</guid>
            <description><![CDATA[<p>It’s often said that America has not been this divided since the Civil War, but even these tumultuous times pale in comparison to the social unrest of the 1960s, when post-war America’s cleavages along race, gender, and sexuality threatened to rip the nation apart. Within ten short years, the United States saw the unfolding of [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2024/05/03/american-space-cowboys/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2024/05/03/american-space-cowboys/" data-wpel-link="internal">American Space Cowboys</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>Excited to Wear This Spring</title>
            <link>https://dieworkwear.com/2024/03/29/excited-to-wear-this-spring-5/</link>
            <dc:creator><![CDATA[divert-brew-diagonal]]></dc:creator>
            <pubDate>Fri, 29 Mar 2024 20:26:26 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=11726</guid>
            <description><![CDATA[<p>According to superstition, good luck comes to those who wear at least one new article of clothing on Easter Sunday, the official start of spring (style-wise). For years, I wrote spring style guides for various publications, including Put This On, but as menswear has become balkanized into tiny little communities, I&#8217;ve found it better to [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2024/03/29/excited-to-wear-this-spring-5/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2024/03/29/excited-to-wear-this-spring-5/" data-wpel-link="internal">Excited to Wear This Spring</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>A Dozen Great Black Friday Sales</title>
            <link>https://dieworkwear.com/2023/11/24/a-dozen-great-black-friday-sales/</link>
            <dc:creator><![CDATA[Derek Guy]]></dc:creator>
            <pubDate>Fri, 24 Nov 2023 14:32:02 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=11627</guid>
            <description><![CDATA[<p>You used to have to muscle your way into stores and stand in long lines to take advantage of Black Friday promotions. Nowadays, everything is online, so you can shop from the comfort of your own home. The difficulty, of course, is that you&#8217;re then swamped with possibilities, making it impossible to know what to [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2023/11/24/a-dozen-great-black-friday-sales/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2023/11/24/a-dozen-great-black-friday-sales/" data-wpel-link="internal">A Dozen Great Black Friday Sales</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>Excited To Wear This Fall</title>
            <link>https://dieworkwear.com/2023/10/16/excited-to-wear-this-fall-3/</link>
            <dc:creator><![CDATA[Derek Guy]]></dc:creator>
            <pubDate>Mon, 16 Oct 2023 20:10:43 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=11201</guid>
            <description><![CDATA[<p>For the past few years, at the start of every season, I&#8217;ve made it a tradition to publish a post about things I&#8217;m excited to wear. These posts are a deliberate shift away from the conventional notion of &#8220;wardrobe essentials,&#8221; a concept that has, in many ways, lost its relevance as people lead different lifestyles. [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2023/10/16/excited-to-wear-this-fall-3/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2023/10/16/excited-to-wear-this-fall-3/" data-wpel-link="internal">Excited To Wear This Fall</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>The Best of This Season&#8217;s Sales</title>
            <link>https://dieworkwear.com/2023/07/01/the-best-of-this-seasons-sales/</link>
            <dc:creator><![CDATA[Derek Guy]]></dc:creator>
            <pubDate>Sat, 01 Jul 2023 01:21:44 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=11088</guid>
            <description><![CDATA[<p>I envy people who aren&#8217;t interested in clothes. Just the sight of a chunky cream sweater or camp collar shirt is enough to send me into a daydreaming tailspin, where I waste hours of my day poring over online images and reading about the product&#8217;s construction. Then I imagine the new and exciting life I [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2023/07/01/the-best-of-this-seasons-sales/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2023/07/01/the-best-of-this-seasons-sales/" data-wpel-link="internal">The Best of This Season&#8217;s Sales</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>Excited to Wear This Spring</title>
            <link>https://dieworkwear.com/2023/06/01/excited-to-wear-this-spring-4/</link>
            <dc:creator><![CDATA[Derek Guy]]></dc:creator>
            <pubDate>Thu, 01 Jun 2023 01:05:57 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=10680</guid>
            <description><![CDATA[<p>For the last few years, I&#8217;ve been doing these posts about things I&#8217;m excited to wear for the season. They&#8217;re a way for me to talk about things I&#8217;m excited about without getting into the fraught concept of &#8220;wardrobe essentials&#8221; (which feels increasingly less relevant nowadays when people have such different needs and lifestyles). Still, [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2023/06/01/excited-to-wear-this-spring-4/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2023/06/01/excited-to-wear-this-spring-4/" data-wpel-link="internal">Excited to Wear This Spring</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>Living Legend: An Interview with Yukio Akamine</title>
            <link>https://dieworkwear.com/2023/04/19/living-legend-an-interview-with-yukio-akamine/</link>
            <dc:creator><![CDATA[Derek Guy]]></dc:creator>
            <pubDate>Wed, 19 Apr 2023 23:24:15 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=10489</guid>
            <description><![CDATA[<p>In the mid-2000s, I used to take the bus to Kinokuniya, an Asian bookstore in San Francisco that sold Japanese magazines like Men&#8217;s Precious, Men&#8217;s Ex, and, of course, the famous Free &#38; Easy. Non-English publications, then as now, covered classic menswear better than their English counterparts. While American magazines like GQ and Esquire featured [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2023/04/19/living-legend-an-interview-with-yukio-akamine/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2023/04/19/living-legend-an-interview-with-yukio-akamine/" data-wpel-link="internal">Living Legend: An Interview with Yukio Akamine</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>Sole Survivors: How the Internet is Saving Bespoke Shoemaking (Pt 2)</title>
            <link>https://dieworkwear.com/2023/04/06/sole-survivors-how-the-internet-is-saving-bespoke-shoemaking-pt-2/</link>
            <dc:creator><![CDATA[Derek Guy]]></dc:creator>
            <pubDate>Thu, 06 Apr 2023 19:51:15 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=10295</guid>
            <description><![CDATA[<p>I was having dinner with Nicholas Templeman a few years ago at Besharam, a small Indian restaurant located on the outskirts of San Francisco. Over spicy vegetarian curries and delicate semolina puffs, we discussed how the British shoemaking trade has changed over the years. I told him I&#8217;d recently spoken with Daniel Wegan and Emiko Matsuda, two bespoke shoemakers who, like [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2023/04/06/sole-survivors-how-the-internet-is-saving-bespoke-shoemaking-pt-2/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2023/04/06/sole-survivors-how-the-internet-is-saving-bespoke-shoemaking-pt-2/" data-wpel-link="internal">Sole Survivors: How the Internet is Saving Bespoke Shoemaking (Pt 2)</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>Sole Survivors: How the Internet Is Saving Bespoke Shoemaking (Pt 1)</title>
            <link>https://dieworkwear.com/2023/02/25/sole-survivors-how-the-internet-is-saving-bespoke-shoemaking-pt-1/</link>
            <dc:creator><![CDATA[Derek Guy]]></dc:creator>
            <pubDate>Sat, 25 Feb 2023 00:01:50 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=10287</guid>
            <description><![CDATA[<p>When it comes to menswear history, it can be challenging to separate fact from fiction. The two are often intertwined in vanity books and marketing pamphlets, and these stories persist because they help companies sell clothes. The best accounts are rooted in primary sources, such as newspaper articles, archival records, or oral histories from reliable [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2023/02/25/sole-survivors-how-the-internet-is-saving-bespoke-shoemaking-pt-1/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2023/02/25/sole-survivors-how-the-internet-is-saving-bespoke-shoemaking-pt-1/" data-wpel-link="internal">Sole Survivors: How the Internet Is Saving Bespoke Shoemaking (Pt 1)</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
]]></description>
        </item>
        <item>
            <title>More Black Friday Sales</title>
            <link>https://dieworkwear.com/2022/11/26/more-black-friday-sales/</link>
            <dc:creator><![CDATA[Derek Guy]]></dc:creator>
            <pubDate>Sat, 26 Nov 2022 22:16:16 +0000</pubDate>
            <category><![CDATA[Uncategorized]]></category>
            <guid isPermaLink="false">https://dieworkwear.com/?p=10187</guid>
            <description><![CDATA[<p>I rounded up every Black Friday sale for Put This On and will update the list through Cyber Monday. But as I do every year, I&#8217;m also highlighting some special sales from that list here. Perhaps most notable is the blowout over at LuxeSwap. I didn&#8217;t include it in this list below because it&#8217;s not [...]</p>
<p><a class="btn btn-secondary understrap-read-more-link" href="https://dieworkwear.com/2022/11/26/more-black-friday-sales/" data-wpel-link="internal">Read More...</a></p>
<p>The post <a href="https://dieworkwear.com/2022/11/26/more-black-friday-sales/" data-wpel-link="internal">More Black Friday Sales</a> appeared first on <a href="https://dieworkwear.com" data-wpel-link="internal">Die, Workwear!</a>.</p>
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
