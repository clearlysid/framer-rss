export default function Home() {
  return (
    <div className="root">
      <header>
        <h1>Framer RSS</h1>
        <p>If you have a Framer blog, this tool can generate an RSS feed for it.</p>
        <p>Made super late at night by <a href="https://www.twitter.com/clearlysid">@clearlysid</a>, for use on <a href="https://www.helmer.app/blog">Helmer's Blog</a>.</p>
      </header>

      <hr />

      <form action="">
        <input type="text" defaultValue={"https://www.helmer.app/blog"} />
        <input type="submit" value="Create Feed" />
      </form>

      <hr />

      <h2>How to use</h2>
      <ol>
        <li>Ensure you have a Framer Site, this project will not for non-Framer sites.</li>
        <li>Add the id <code>rss</code> to the Collection List component on your blog page</li>
        <li>Deploy your site</li>
        <li>Enter the URL of your site below</li>
        <li>Click generate</li>
      </ol>
    </div>
  )
}
