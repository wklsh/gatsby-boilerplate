import React from "react";
import { graphql, navigate, Link } from "gatsby";
import { get } from "lodash";
import sanitize from "sanitize-html";
import PropTypes from "prop-types";

import { htmlifyMarkdown } from "../utils";
import BlogLayout from "../layouts/BlogLayout";
import SEO from "../components/SEO/SEO";

const propTypes = {
	data: PropTypes.object.isRequired,
	/** pathname for linking */
	uri: PropTypes.string.isRequired,
};

const BlogExample = ({ data, uri }) => {
	const dataObj = get(data, "markdownRemark.frontmatter");
	console.log("dataObj:", dataObj);

	return (
		<BlogLayout>
      {/* 
        <SEO title={dataObj.title} image={dataObj.heroImage} pathname={uri} article />
        <section>
          <div dangerouslySetInnerHTML={{ __html: htmlifyMarkdown(dataObj.blogContent) }} />
        </section>
      */}
		</BlogLayout>
	);
};

export const query = graphql`
	query($slug: String!) {
		file(childMarkdownRemark: { fields: { slug: { eq: $slug } } }) {
			childMarkdownRemark {
        frontmatter {
          title
        }
      }
		}
	}
`;

BlogExample.propTypes = propTypes;
export default BlogExample;

