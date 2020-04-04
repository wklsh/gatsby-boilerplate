import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import SEO from "../../components/SEO/SEO";

import styles from "./Main.module.scss";

const propTypes = {
	children: PropTypes.object.isRequired,
};

class Main extends PureComponent {
	render() {
		const { children } = this.props;

		return (
			<main className={styles.main__wrapper}>
				<SEO />
				<h1 className="test">Main Layout</h1>

				<section className={styles.children__wrapper}>{children}</section>
			</main>
		);
	}
}

Main.propTypes = propTypes;
export default Main;
