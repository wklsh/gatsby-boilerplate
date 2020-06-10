const path = require("path");

module.exports = {
  // controlled by SEO.jsx component, refer to react-helmet as well
  siteMetadata: {
		title: "SITE TITLE",
		titleTemplate: "%s – TEMPLATE TITLE",
		siteUrl: "URL",
		description:
			"SITE DESCRIPTION",
		image: "", // path to your image you placed in the 'static' folder
	},
  
	plugins: [
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ["develop"],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: "gatsby-plugin-sass",
			options: {
				cssLoaderOptions: {
					camelCase: false,
				},
			},
		},
    {
			resolve: `gatsby-plugin-minify-classnames`,
			options: {
				develop: false, // Enables on `gatsby develop`
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/src/markdown-pages`,
			},
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-lodash",
		{
			resolve: "gatsby-plugin-alias-imports",
			options: {
				alias: {
					"@src": path.resolve(__dirname, "src"),
					"@styles": path.resolve(__dirname, "src/styles"),
					"@mixins": path.resolve(__dirname, "src/styles/utils/_mixins.scss"),
					"@var": path.resolve(__dirname, "src/styles/utils/_var.scss"),
				},
				extensions: ["jsx", "js", "scss", "css", "sass"],
			},
		},
		{
			resolve: "gatsby-plugin-layout",
			options: {
				component: path.resolve(__dirname, "src/layouts/Main/Main.jsx"),
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				custom: {
					families: ["font-name"],
					urls: ["/fonts/fonts.css"], // files have to be in STATIC folder
				},
			},
		},
    // this has to be the last to be called, else aliases [gatsby-plugin-alias-imports] will not work
		"gatsby-plugin-netlify-cms",  
	],
};
