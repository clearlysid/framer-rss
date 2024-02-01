import { fetchSite } from '../utils/fetch-site';

type Article = {
	date: string;
	title: string;
	description: string;
	link: string;
	image?: string;
}

export const getPosts = async (url: string): Promise<Article[]> => {
	const $ = await fetchSite(url);
	
	const collectionList = $('#rss').first()

	// This assumes all the articles are links, not sure if it is reliable enough
	const articles = collectionList.children().find('a').toArray()
	console.log(`Found ${articles.length} articles!`)
	
	// Get each article's details
	const posts = articles.map((article) => {
		const $article = $(article);

		// Assumes the article is a link itself and gets href
		const link = $article.attr('href') ?? '';
		
		// Assumes title is always h3.
		// TODO: improve this to find the highest level heading in the article
		const title = $article.children().find('h3').text();

		// Assumes image is always the first image in the article
		// TODO: improve this to find the largest image, not first
		const image = $article.find('img').attr('src');
	
		// Assumes description is always the longest paragraph in the article
		const description = $article.find('p').toArray().reduce((longest, p) =>
			($(p).text().length > longest.length) ? $(p).text() : longest, ''
		);

		// Assumes date is always in a p tag and includes "2024"
		// TODO: think of better way to find date
		const dateTag = $article.find('p').toArray().filter((p) => $(p).text().includes('2024'))
		const date = $(dateTag).text()

		return {
			date,
			title,
			image,
			description,
			link: new URL(link, url).toString(),
	  };
	});

	// console.log(posts)
	
	return posts;
};