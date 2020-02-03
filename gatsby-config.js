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
	],
};
