import type { MetaFunction } from "@remix-run/node";
interface MetaOptions {
    title?: string;
    description?: string;
    "og:title"?: string;
    "og:description"?: string;
    "og:image"?: string;
    "og:url"?: string;
    "twitter:card"?: string;
    "twitter:title"?: string;
    "twitter:description"?: string;
    "twitter:image"?: string;
    [key: string]: string | undefined;
}
/**
 * Generates a Remix-compatible meta function based on provided SEO options.
 *
 * @param options - An object containing optional SEO meta tags.
 * @returns A MetaFunction that Remix can use to set page metadata.
 */
export declare function createMeta(options: MetaOptions): MetaFunction;
export {};
//# sourceMappingURL=index.d.ts.map