import Form from "./form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="root">
      <header>
        <h1>Framer RSS</h1>
        <p>If you have a Framer blog, this tool can generate an RSS feed for it.</p>
        <p>Made super late at night by <a href="https://www.twitter.com/clearlysid">@clearlysid</a>, for use on <a href="https://www.helmer.app/blog">Helmer</a>.</p>
      </header>

      <hr />

      <h2>How to use</h2>
      <ol>
        <li>Ensure you have a Framer Site, this project does not work for non-Framer sites.</li>
        <li>In your Framer project, add the id <code>rss</code> to your <b>Collection List</b> component:
          <div className="how-to">
            <Image src={"/collection-list.png"} alt="Collection List component" width={200} height={130} />
            <Image src={"/id.png"} alt="How to add an id" width={200} height={130} />
          </div>
        </li>
        <li>Deploy your site</li>
        <li>Enter the URL of the page containing the Collection List component</li>
        <li>Click "Create Feed"</li>
      </ol>

      <Form />

      <hr />

      <h2>How it works</h2>

      <p>This is small app that scrapes your Frame site every now and then, and generates the RSS feed to serve as needed. It is still a prototype and not recommended for production / sensitive use.</p>

      <p>The code is <a href="https://github.com/clearlysid/framer-rss" target="_blank">open source</a>, in case you'd like to contribute or self-host. Consider donating via <a href="https://github.com/sponsors/clearlysid" target="_blank">Github Sponsors</a> if it helped.</p>

      <hr />

      <h2>Improvement Notes</h2>
      <ol>
        <li>Enable better caching mechanism so fresh RSS feeds are not generated at each request</li>
        <li>Make Framer scraping logic more robust for posts</li>
        <li>Improve UI of landing page to make initial setup easier</li>
        <li>Allow self-hosting this project on Netlify/Vercel</li>
      </ol>

      <hr />
    </div>
  )
}
