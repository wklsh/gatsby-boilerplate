# Gatsby + Netlify CMS
## NOTE: BEFORE YOU START
- Start off with a new npm build (`npm init`)
- [Install Gatsby without using `gatsby new`](https://www.gatsbyjs.org/docs/setting-up-gatsby-without-gatsby-new/)
- Replace existing assets with assets in this repo
- `npm i`
- `npm update`

Things to do from this point:
- Update package.json scripts and dependencies
- Set up oAuth, link up Github repo with Netlify – [Source](https://www.gatsbyjs.org/tutorial/blog-netlify-cms-tutorial)
- Update config in `admin/config.yml`
   
## Grabbing data for [Custom Previews](https://www.netlifycms.org/docs/customization/)
Here's an example.
```
// gatsby-config.js

plugins: [
  ...
  {
    resolve: "gatsby-plugin-netlify-cms",
    options: {
      modulePath: `${__dirname}/src/cms/cms.js`,
    },
  },
  ...
]
```  
```
// src/cms/cms.js

import CMS from "netlify-cms-app";

import WorkPreview from "./preview-templates/WorkPreview";

CMS.registerPreviewTemplate("COLLECTION_NAME", WorkPreview);
```  
```
// src/cms/preview-templates/WorkPreview

export default function PagePreview({ entry, widgetFor, getAsset }) {
  const data = entry.get('data').toJS();
  const { image, title, heading, description, intro, main, full_image, testimonials, pricing } = data;

  return <PageTemplate
    image={image}
    title={title}
    heading={heading}
    description={description}
    intro={intro.blurbs}
    main={main}
    fullImage={full_image}
    testimonials={testimonials}
    pricing={pricing}
  />;
}

```

## NOTE: If new collection pages are not appearing after creation
Files listed in a file collection must already exist in the hosted repository branch set in your Netlify CMS backend configuration. Ensure that the new empty page is already created in **MASTER** branch.

## When working with gatsby-image with netlify-cms
[gatsby-plugin-netlify-cms-paths](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms-paths/) is needed in order for image objects to utilise gatsby-image

## OPTIONAL: Working with a Local Git Repository – [Source](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository)
You can connect Netlify CMS to a local Git repository, instead of working with a live repo.
1. Navigate to a local Git repository configured with the CMS.
2. Run `npx netlify-cms-proxy-server` from the root directory of the above repository.
3. Update your config.yml to connect to the server:
```
backend:
  name: proxy
  proxy_url: http://localhost:8081/api/v1
  branch: master # optional, defaults to master
```
4. Start you local development server (e.g. run `gatsby develop`).

   `netlify-cms-proxy-server` runs an unauthenticated express server. As any client can send requests to the server, it should only be used for local development.
