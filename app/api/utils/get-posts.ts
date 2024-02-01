import { Cheerio } from 'cheerio';
import { fetchSite } from '../utils/fetch-site';

type Article = {
	title: string;
	link: string;
	date?: string;
	image?: string;
	description?: string;
}

const getArticleTitle = ($article: Cheerio<any>) => {
	if ($article.find('h1').length > 0) {
		return $article.find('h1').text()
	} else if ($article.find('h2').length > 0) {
		return $article.find('h2').text()
	} else if ($article.find('h3').length > 0) {
		return $article.find('h3').text()
	} else if ($article.find('h4').length > 0) {
		return $article.find('h4').text()
	} else if ($article.find('h5').length > 0) {
		return $article.find('h5').text()
	} else if ($article.find('h6').length > 0) {
		return $article.find('h6').text()
	} else if ($article.find('p').length > 0) {
		return $article.find('p').text()
	} else {
		return ''
	}
}

export const getPosts = async (url: string): Promise<Article[]> => {
	const $ = await fetchSite(url);
	
	const collectionList = $('#rss').first()

	// INFO
	// This assumes all the articles are links inside collectionList
	// Not sure if this assumption is reliable enough
	let articles = collectionList.children().find('a').toArray()
	console.log(`Found ${articles.length} articles!`)

	// filter out articles with duplicate links
	articles = articles.filter((article, index) => {
		const $article = $(article);
		const link = $article.attr('href') ?? '';
		const links = articles.map((article) => {
			const $article = $(article);
			return $article.attr('href') ?? '';
		})
		return links.indexOf(link) === index
	})

	
	// Get each article's details
	const posts = articles.map((article) => {
		const $article = $(article);

		// Assume the article is itself a link and get href
		const link = $article.attr('href') ?? '';

		// Assume the highest level heading is the title
		const title = getArticleTitle($article);

		// Assume image is always the first image in the article
		// TODO: improve this to find the largest image, not first
		const image = $article.find('img').attr('src') ?? '';
	
		// Assume description is the longest p tag with min 60 chars
		const description = $article.find('p')
			.toArray()
			.filter((p) => $(p).text().length >= 60)
			.reduce((l, p) =>
				($(p).text().length > l.length) ? $(p).text() : l, ''
			) ?? undefined

		// Assumes date is always in a p tag and includes "2024"
		// TODO: think of better way to find date
		const dateTag = $article.find('p').toArray().filter((p) => $(p).text().includes('2024'))
		const date = $(dateTag).text() ?? ''

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