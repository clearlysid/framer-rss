import { CheerioAPI } from 'cheerio';

export const isFramerSite = async ($: CheerioAPI): Promise<boolean> => {
	return $('body').attr('class')?.startsWith('framer') ?? false
};