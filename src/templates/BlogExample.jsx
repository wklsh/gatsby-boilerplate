import React from "react";
import { graphql, navigate, Link } from "gatsby";
import { get } from "lodash";
import sanitize from "sanitize-html";
import PropTypes from "prop-types";

const propTypes = {
	data: PropTypes.object.isRequired,
};

const BlogExample = ({ data }) => {
	const dataObj = get(data, "markdownRemark.frontmatter");
	console.log("dataObj:", dataObj);

	return <section></section>;
};

BlogExample.propTypes = propTypes;
export default BlogExample;

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
