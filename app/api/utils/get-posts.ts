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
	const articles = collectionList.children().find('a').toArray()
	
	console.log(`Found ${articles.length} articles!`)
	
	// Get each article's details
	const posts = articles.map((article) => {
		const $article = $(article);

		const link = $article.attr('href') ?? '';
		const title = $article.children().find('h3').text();
		const image = $article.find('img').attr('src');

		const description = $article.find('p').toArray().reduce((longest, p) =>
			($(p).text().length > longest.length) ? $(p).text() : longest, ''
		);

		// TODO: improve this
		// find p tag that contains a year
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