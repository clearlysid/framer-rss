# Framer RSS

If you have a Framer blog, this tool can generate an RSS feed for it.

It is small server app that scrapes your Framer site every so often, generates the feed, and serves it on a URL. It's only a prototype for now and not recommended for production / sensitive use.

## Other Notes

Most Framer sites should work, but there are exceptions. We need to make some assumptions about your site to extract details about each post (title, date, etc.) — the exact mechanism to do this varies from site to site.

If it doesn't work on yours, please open a Github issue with a link to your site and I'll try to lend a hand.

Feel free to contribute or self-host, the code is open source. Consider donating via Github Sponsors if it helped!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/clearlysid/framer-rss)

## Improvements

-   [ ] Improve caching mechanism
-   [ ] Make Framer scraping logic more robust
-   [x] Improve landing page to make initial setup easier
-   [x] Allow self-hosting this project on Netlify

## References

1. [lambda-rss-node](https://github.com/jwilsson/lambda-rss-node/tree/main) by [@jwilsson](https://github.com/jwilsson/)
