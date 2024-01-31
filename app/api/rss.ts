import { getPosts } from './utils/get-posts';

export const rss = async (url: string): Promise<string> => {
    const posts = await getPosts(url);

    const name = 'Framer Blog';

    return `
        <?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0">
            <channel>
                <title>${name}</title>
                <description>${name}</description>
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