import { getPosts } from './utils/get-posts';
import { fetchSite } from './utils/fetch-site';

export const rss = async (url: string): Promise<string> => {

    // Fetch the site with Cheerio
    const $ = await fetchSite(url);

    // Extract title and description of page
    const title = $('title').first().text();
	const description = $('meta[name="description"]').first().attr('content');

    // Extract the posts
    const posts = await getPosts(url);

    return `
        <?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0">
            <channel>
                <title>${title}</title>
                <description>${description}</description>
                <link>${url}</link>
                <ttl>720</ttl>
                ${posts
                    .map(
                        (post) => `
                    <item>
                        <title>${post.title}</title>
                        <description>${post.description}</description>
                        <guid>${post.link}</guid>
                        <link>${post.link}</link>
                        <pubDate>${post.date}</pubDate>
                    </item>
                `,
                    )
                    .join('')}
            </channel>
        </rss>
    `.trim();
};