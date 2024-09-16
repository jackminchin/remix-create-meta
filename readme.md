# remix-create-meta

`remix-create-meta` is a utility function designed to simplify creating SEO-optimized meta tags for Remix applications. It dynamically generates meta functions that can be directly used in your Remix loaders or routes to enhance your site's SEO with minimal effort.

## Features

- Easily set document title and description
- Supports Open Graph tags for better social media sharing
- Supports Twitter Card tags for enhanced Twitter embeds
- Allows additional custom meta tags for flexibility
- Fully compatible with Remix meta functions

## Installation

You can install the package via npm or yarn:

```bash
npm install remix-create-meta
```

or

```bash
yarn add remix-create-meta
```

## Usage

Import the `createMeta` function and pass an object with your desired SEO meta tags. Use it in your Remix loader or directly in a route's `meta` function.

### Example

```tsx
// routes/index.tsx
import { createMeta } from 'remix-create-meta';

export const meta = createMeta({
  title: "My Awesome Remix App",
  description: "This is a sample Remix app with SEO-optimized meta tags.",
  "og:title": "My Awesome Remix App",
  "og:description": "A powerful Remix app built for speed and SEO.",
  "og:image": "/path-to-image.jpg",
  "og:url": "https://myremixapp.com",
  "twitter:card": "summary_large_image",
  "twitter:title": "My Awesome Remix App",
  "twitter:description": "Check out this amazing Remix application!",
  "twitter:image": "/path-to-twitter-image.jpg",
});
```

In this example, the `createMeta` function automatically generates the necessary meta tags for both Open Graph (for Facebook, LinkedIn, etc.) and Twitter.

### Supported Meta Tags

- **title**: The page's document title.
- **description**: A short description of the page.
- **Open Graph tags**: 
  - `og:title`, `og:description`, `og:image`, `og:url`
- **Twitter Card tags**:
  - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- **Custom tags**: You can also pass any other custom meta tags that your app requires.

## TypeScript Support

The package includes full TypeScript support with types provided for the meta options.

```ts
import { createMeta } from 'remix-create-meta';

const metaFunction = createMeta({
  title: "My Remix Site",
  description: "This is my awesome site built with Remix.",
});
```

## License

This package is licensed under the MIT License. See the LICENSE file for more details.