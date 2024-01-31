import { fetchSite } from '../utils/fetch-site';
import { formatDate } from '../utils/format-date';

type Article = {
	date: string;
	title: string;
	description: string;
	link: string;
}

export const getPosts = async (url: string): Promise<Article[]> => {
	const $ = await fetchSite(url);
	
	const collectionList = $('#rss').first()
	const articles = collectionList.children().find('a').toArray()
	
	console.log(`Found ${articles.length} articles!`)
	
	// TODO: get the title, date, and type from each link
	const posts = articles.map((article) => {
		const $article = $(article);

		const link = $article.attr('href') ?? '';
		const title = $article.children().find('h3').text();

		const description = $article.find('p').toArray().reduce((longest, p) =>
			($(p).text().length > longest.length) ? $(p).text() : longest, ''
		);

		// find p tag that contains a year
		const date = $article.find('p').toArray().filter((p) => {
			return $(p).text().includes('2024')
		})

		return {
			// date: formatDate(date, 'MMMM d, yyyy'),
			date: "",
			title,
			description,
			link: new URL(link, url).toString(),
	  };
	});

	// console.log(posts)
	
	return posts;
};