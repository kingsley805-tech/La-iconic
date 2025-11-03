import { type ReactNode, useEffect, useMemo } from "react";
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

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = seo.title;

    const setMeta = (selector: string, attr: "name" | "property", content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${selector}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, selector);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "name", seo.description);
    setMeta("image", "name", seo.image);
    setMeta("og:type", "property", "website");
    setMeta("og:title", "property", seo.title);
    setMeta("og:description", "property", seo.description);
    setMeta("og:image", "property", seo.image);
    setMeta("og:url", "property", seo.url);
    setMeta("twitter:card", "name", "summary_large_image");
    setMeta("twitter:title", "name", seo.title);
    setMeta("twitter:url", "name", seo.url);
    setMeta("twitter:description", "name", seo.description);
    setMeta("twitter:image", "name", seo.image);
    if (seo.twitterUsername) setMeta("twitter:creator", "name", seo.twitterUsername);

    let linkIcon = document.head.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!linkIcon) {
      linkIcon = document.createElement("link");
      linkIcon.setAttribute("rel", "icon");
      document.head.appendChild(linkIcon);
    }
    linkIcon.setAttribute(
      "href",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
    );
  }, [seo]);

  return <>{children}</>;
}


