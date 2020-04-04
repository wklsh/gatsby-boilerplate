import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

const propTypes = {
	/** Page title */
	title: PropTypes.string,
	/** Page Description */
	description: PropTypes.string,
	/** Hero image url – if available */
	image: PropTypes.string,
	/** To include slugs */
	pathname: PropTypes.string,
	/** Inline boolean prop, just include [article] in the SEO tag if its an article page */
	article: PropTypes.bool,
};

const defaultProps = {
	title: null,
	description: null,
	image: null,
	pathname: null,
	article: false,
};

function SEO({ title, description, image, pathname, article }) {
	return (
		<StaticQuery
			query={graphql`
				query SEO {
					site {
						siteMetadata {
							defaultTitle: title
							titleTemplate
							defaultDescription: description
							url: siteUrl
							defaultImage: image
						}
					}
				}
			`}
			render={({
				site: {
					siteMetadata: { defaultTitle, titleTemplate, defaultDescription, url, defaultImage },
				},
			}) => {
				const seo = {
					title: title || defaultTitle,
					description: description || defaultDescription,
					image: `${url}${image || defaultImage}`,
					url: `${url}${pathname || "/"}`,
				};

				return (
					<Helmet title={seo.title} titleTemplate={titleTemplate} defer={false}>
						<meta name="description" content={seo.description} />
						<meta name="image" content={seo.image} />
						<meta property="og:url" content={seo.url} />
						{article && <meta property="og:type" content="article" />}
						{seo.title && <meta property="og:title" content={seo.title} />}
						{seo.description && <meta property="og:description" content={seo.description} />}
						{seo.image && <meta property="og:image" content={seo.image} />}
					</Helmet>
				);
			}}
		/>
	);
}

SEO.propTypes = propTypes;
SEO.defaultProps = defaultProps;

export default SEO;
