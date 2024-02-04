import { CheerioAPI, load } from 'cheerio';

export const fetchSite = async (url: string): Promise<CheerioAPI> => {
    const response = await fetch(url, { next: { revalidate: 86400 } });
    const body = await response.text();

    return load(body);
};