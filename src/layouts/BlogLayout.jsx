import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.object.isRequired,
};

function BlogLayout({ children }) {
	return (
		<section style={{ border: "1px solid orange" }}>
			<h1>Blog Layout</h1>
			{children}
		</section>
	);
}

BlogLayout.propTypes = propTypes;

export default BlogLayout;
