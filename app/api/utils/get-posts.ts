import { Article } from '../types';
import { fetchSite } from '../utils/fetch-site';
import { formatDate } from '../utils/format-date';

export const getPosts = async (url: string): Promise<Article[]> => {

	const $ = await fetchSite(url);
	// TODO: scrape the site for posts

	const collectionList = $('#rss').html();

	console.log(collectionList);

	// articles.map((article) => {

	//     // console.log(article.attribs.id);
	//     console.log(article.attribs)
	// });

	console.log("=============")

	// return articles.map((article) => {
	//     const $article = $(article);
	//     const $date = $article.find('b');
	//     const $link = $article.find('a');
	//     const $type = $article.find('[type]');

	//     const date = $date.text().trim();
	//     const title = $link.text().trim();
	//     const type = $type.text().trim();
	//     const url = $link.attr('href') ?? '';

	//     return {
	//         date: formatDate(date, 'MMMM d, yyyy'),
	//         description: `${type} - ${title}`,
	//         link: new URL(url, BASE_URL).toString(),
	//         title,
	//     };
	// });
	
	return [];
};