module.exports = {
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
		"gatsby-plugin-sass",
		"gatsby-plugin-netlify-cms",
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
					"@var": path.resolve(__dirname, "src/styles/utils/_variables.scss"),
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
					urls: ["fonts/fonts.css"], // files have to be in STATIC folder
				},
			},
		},
	],
};
