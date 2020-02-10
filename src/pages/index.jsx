import React from "react";
import { graphql } from "gatsby";
import { get } from "lodash";

export default class IndexPage extends React.PureComponent {
	render() {
		return <div className="test">Index</div>;
	}
}

// Queries here, go out http://localhost:8000/___graphql for GraphQL IDE
// export const query = graphql``;
