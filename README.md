# Framer RSS

If you have a Framer blog, this tool can generate an RSS feed for it.

It is small server app that scrapes your Framer site every so often, generates the feed, and serves it on a URL. It's only a prototype for now and not recommended for production / sensitive use.

## Other Notes

This can generate RSS for most Framer sites but there are exceptions. We need to make some assumptions about your site to be able to extract details about each post (title, date, etc.). The exact mechanism to do this varies from site to site.

If it doesn't work on yours, I encourage you to open an issue on Github along with a link to your site and I'll try to lend a hand.

If you'd like to contribute or self-host, the code is open source. Consider donating via Github Sponsors if it helped, that way I can cover the server costs if any.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/clearlysid/framer-rss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclearlysid%2Fframer-rss)

## Improvements

-   [ ] Enable better caching mechanism so fresh RSS feeds are not generated at each request
-   [ ] Make Framer scraping logic more robust for posts
-   [x] Improve landing page to make initial setup easier
-   [x] Allow self-hosting this project on Netlify/Vercel

## Contributions

I put this together for my own use, but any help is welcome!

## References

1. [lambda-rss-node](https://github.com/jwilsson/lambda-rss-node/tree/main) by [@jwilsson](https://github.com/jwilsson/)
