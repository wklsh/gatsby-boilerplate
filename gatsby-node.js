const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const remark = require("remark");
const remarkHTML = require("remark-html");
const _ = require("lodash");

/**
 * Convert any field item inside CMS data from Markdown to HTML
 * @param {object} node  node object
 */
function htmlifyFields(node) {
	const strVal = "getInTouch"; // CHANGE-THIS

	if (_.has(node, `frontmatter[${strVal}]`)) {
		node.frontmatter[strVal] = remark()
			.use(remarkHTML)
			.processSync(node.frontmatter[strVal])
			.toString();

		return node;
	}
}

/**
 * Generate slugs for markdown nodes
 * @param {object} node   node data
 * @param {func} getNode  API
 * @param {func} actions  API
 */
function generatePagePostSlugs(node, getNode, actions) {
	const { createNodeField } = actions;

	if (node.internal.type === "MarkdownRemark") {
		const slug = createFilePath({ node, getNode, basePath: `CHANGE-THIS` });

		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});
	}
}

exports.onCreateNode = ({ node, getNode, actions }) => {
	htmlifyFields(node);
	generatePagePostSlugs(node, getNode, actions);
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: `/work${node.fields.slug}`,
			component: path.resolve(`./src/templates/BlogExample.jsx`),
			context: {
				// Data passed to context is available in page queries, as GraphQL variables.
				slug: node.fields.slug,
			},
		});
	});
};
