import Head from "next/head";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
}

export default function SeoHead({
  title,
  description,
  keywords,
  url,
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
