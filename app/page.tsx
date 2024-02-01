import Form from "./form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="root">
      <header>
        <h1>Framer RSS</h1>
        <p>If you have a Framer blog, this tool can generate an RSS feed for it.</p>
        <p>It is small server app that scrapes your Framer site every so often, generates the feed, and serves it on a URL. It's only a prototype for now and not recommended for production / sensitive use.</p>
        <p>Made super late at night by <a href="https://www.twitter.com/clearlysid">@clearlysid</a>, for use at Headout and Helmer.</p>
      </header>

      <hr />

      <h2>How to use</h2>
      <ol>
        <li>In your Framer project, add the id <code>rss</code> to your <b>Collection List</b> component.
          <div className="grid">
            <Image src={"/collection-list.png"} alt="Collection List component" width={200} height={130} />
            <Image src={"/id.png"} alt="How to add an id" width={200} height={130} />
          </div>
        </li>
        <li>Deploy your site</li>
        <li>Enter the URL of the page that has the Collection List component</li>
        <li>Click "Create Feed"</li>
      </ol>

      <Form />

      <hr />

      <h2>Other Notes</h2>

      <p>This can reliably generate RSS for most Framer sites, but there are exceptions. We need to make some assumptions about your site to be able to extract details about each post (title, date, etc.). The exact mechanism to do this varies from site to site.</p>

      <p>If it doesn't work on your site, I encourage you to open an issue on Github along with a link to it and I'll try to lend a hand.</p>

      <p>If you'd like to contribute or self-host, the code is <a href="https://github.com/clearlysid/framer-rss" target="_blank">open source</a>. Consider donating via <a href="https://github.com/sponsors/clearlysid" target="_blank">Github Sponsors</a> if it helped, that way I can cover the server costs if any.</p>

      <div className="grid">
        <a href="https://app.netlify.com/start/deploy?repository=https://github.com/clearlysid/framer-rss">
          <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
        </a>
        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclearlysid%2Fframer-rss">
          <img src="https://vercel.com/button" alt="Deploy with Vercel" />
        </a>

        <iframe src="https://github.com/sponsors/clearlysid/button" title="Sponsor clearlysid" height="32" width="114" style={{ border: 0, borderRadius: "6px" }}></iframe>
      </div>

      <hr />

      <h2>Improvements</h2>
      <ol>
        <li>Create better caching mechanism so feeds are not generated at each request</li>
        <li>Make Framer scraping logic more robust for posts</li>
        <li>✅ <s>Improve landing page to make initial setup easier</s></li>
        <li>✅ <s>Allow self-hosting this project on Netlify/Vercel</s></li>
      </ol>

      <hr />
    </div>
  )
}
