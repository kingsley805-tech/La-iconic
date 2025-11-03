import { ReactNode, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
};

export function SEO({ title, description, pathname, children }: SEOProps) {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } =
    useSiteMetadata();

  const seo = useMemo(
    () => ({
      title: title || defaultTitle,
      description: description || defaultDescription,
      image: `${siteUrl}${image}`,
      url: `${siteUrl}${pathname || ""}`,
      twitterUsername,
    }),
    [title, description, pathname, defaultTitle, defaultDescription, image, siteUrl, twitterUsername]
  );

  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {seo.twitterUsername && <meta name="twitter:creator" content={seo.twitterUsername} />}

      {/* Emoji favicon to mirror Gatsby example; replace with a file fav if desired */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />

      {children}
    </Helmet>
  );
}


