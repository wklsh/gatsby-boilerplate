import React, { PureComponent } from "react";

import styles from "./Main.module.scss";

export default class Main extends PureComponent {
	render() {
		const { children } = this.props;

		return (
			<main>
				<h1 className="test">Main Layout</h1>
				<section className={styles.children__wrapper}>{children}</section>
			</main>
		);
	}
}
