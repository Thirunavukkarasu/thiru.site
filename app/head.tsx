export default function Head() {
  const meta = {
    title: "Thirunavukkarasu - Developer, Writer, Architect and YouTuber",
    description: `I've been developing websites for 7 years straight.`,
    image: "/avatar.jpg",
    type: "website",
    date: "",
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://thirunavukkarasu.com`} />
      <link rel="canonical" href={`https://thirunavukkarasu.com`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Thirunavukkarasu" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thiruhuman" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </>
  );
}
