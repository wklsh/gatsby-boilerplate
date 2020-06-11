import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { get } from "lodash";

const propTypes = {
// 	data: PropTypes.object.isRequired,
};

class IndexPage extends React.PureComponent {
	render() {
		return <div className="test">Index</div>;
	}
}

IndexPage.propTypes = propTypes;
export default IndexPage;

// Queries here, go to http://localhost:8000/___graphql for GraphQL IDE
// export const query = graphql``;
