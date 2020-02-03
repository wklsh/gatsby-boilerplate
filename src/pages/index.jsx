import React from "react";
import { graphql } from "gatsby";
import { get } from "lodash";

export default class IndexPage extends React.PureComponent {
	render() {
		return <div className="test">Index</div>;
	}
}

export const query = graphql``;
