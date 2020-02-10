# Gatsby + Netlify CMS
## NOTE: BEFORE YOU START
Starting with a new folder with `npm init` is preferred, then [set up gatsby without gatsby new](https://www.gatsbyjs.org/docs/setting-up-gatsby-without-gatsby-new/),`npm i`, `npm update`, and then update the src folder contents with assets in here.

Things to do from this point:
- Update package.json scripts and dependencies
- Set up oAuth, link up Github repo with Netlify – [Source](https://www.gatsbyjs.org/tutorial/blog-netlify-cms-tutorial)
- Update config in `admin/config.yml`


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
