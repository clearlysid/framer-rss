import { fetchSite } from './fetch-site';

export const isFramerSite = async (url: string): Promise<boolean> => {
	try {

		const $ = await fetchSite(url);
		return $('body').attr('class')?.startsWith('framer') ?? false;

	} catch (e: any) {
		console.error('Error:', e.message);
		return false;
	}
};