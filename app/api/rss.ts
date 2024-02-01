import { Feed } from "feed";
import { getPosts } from './utils/get-posts';
import { CheerioAPI } from "cheerio";

export const rss = async ($: CheerioAPI, url: string): Promise<string> => {

    // Extract metadata from Framer site
    const title = $('title').first().text();
    const image = $('meta[property="og:image"]').attr('content');
    const favicon = $('link[rel="icon"]').attr('href');
    const description = $('meta[name="description"]').attr('content');
    const lastUpdated = $('#main').attr('data-framer-ssr-released-at');

    // convert the last updated date to a Date object
    const updated = new Date(lastUpdated as string);
    const copyright = "©" + updated.getFullYear();

    // Create a new feed
    const feed = new Feed({
        title,
        image,
        favicon,
        description,
        updated,
        copyright,
        id: url,
        link: url,
        generator: "framer-rss"
    });

    // Extract the posts
    const posts = await getPosts(url);
    // console.log(posts)

    posts.forEach(post => {
        feed.addItem({
            title: post.title,
            id: post.link,
            link: post.link,
            description: post.description,
            date: new Date(post.date),
            image: post.image,
        })
    })

    return feed.rss2();
};