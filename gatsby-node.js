const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * Generate slugs for markdown nodes
 * @param {object} node   node data
 * @param {func} getNode  API
 * @param {func} actions  API
 */
function generatePagePostSlugs(node, getNode, actions) {
	const { createNodeField } = actions;

	if (node.internal.type === "MarkdownRemark") {
    // const slug = createFilePath({ node, getNode, basePath: `CHANGE-THIS` });
		const slug = createFilePath({ node, getNode });

		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});
	}
}

exports.onCreateNode = ({ node, getNode, actions }) => {
	generatePagePostSlugs(node, getNode, actions);
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

  // query for page parent directory as well to determine which templates to create with
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
						parent {
							... on File {
								relativeDirectory
							}
						}
					}
				}
			}
		}
	`);

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let component;
		switch (node.parent.relativeDirectory) {
			case "DIR-ONE":
				component = path.resolve(`./src/templates/REPLACE-ME-WITH-DIR-ONE-TEMP.jsx`);
				break;

			case "DIR-TWO":
				component = path.resolve(`./src/templates/REPLACE-ME-WITH-DIR-TWO-TEMP.jsx`);
				break;

			default:
        // null this when exmaple template is no longer needed
				component = path.resolve(`./src/templates/BlogExample.jsx`);
		}
    
		createPage({
			path: `/work${node.fields.slug}`,
			component,
			context: {
				// Data passed to context is available in page queries, as GraphQL variables.
				slug: node.fields.slug,
			},
		});
	});
};
