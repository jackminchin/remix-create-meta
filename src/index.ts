// utils/meta.ts
import type { MetaFunction } from "@remix-run/node";

interface MetaOptions {
  title?: string;
  description?: string;
  // Open Graph tags
  "og:title"?: string;
  "og:description"?: string;
  "og:image"?: string;
  "og:url"?: string;
  // Twitter Card tags
  "twitter:card"?: string;
  "twitter:title"?: string;
  "twitter:description"?: string;
  "twitter:image"?: string;
  // Additional custom meta tags
  [key: string]: string | undefined;
}

/**
 * Generates a Remix-compatible meta function based on provided SEO options.
 *
 * @param options - An object containing optional SEO meta tags.
 * @returns A MetaFunction that Remix can use to set page metadata.
 */
export function createMeta(options: MetaOptions): MetaFunction {
  return () => {
    const metaTags: Array<{ [key: string]: string }> = [];

    // Set the document title if provided
    if (options.title) {
      metaTags.push({ title: options.title });
    }

    // Set the description meta tag if provided
    if (options.description) {
      metaTags.push({ name: "description", content: options.description });
    }

    // Handle Open Graph meta tags
    const ogTags = ["og:title", "og:description", "og:image", "og:url"];
    ogTags.forEach((tag) => {
      if (options[tag]) {
        metaTags.push({ property: tag, content: options[tag]! });
      }
    });

    // Handle Twitter Card meta tags
    const twitterTags = [
      "twitter:card",
      "twitter:title",
      "twitter:description",
      "twitter:image",
    ];
    twitterTags.forEach((tag) => {
      if (options[tag]) {
        metaTags.push({ name: tag, content: options[tag]! });
      }
    });

    // Handle any additional custom meta tags
    Object.keys(options).forEach((key) => {
      if (
        !["title", "description", ...ogTags, ...twitterTags].includes(key) &&
        options[key]
      ) {
        metaTags.push({ name: key, content: options[key]! });
      }
    });

    return metaTags;
  };
}
