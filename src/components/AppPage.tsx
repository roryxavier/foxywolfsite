import { Component, type ReactNode } from "react";
import AnimatedBg from "@/components/AnimatedBg.tsx";
import AppActionbar from "./AppActionbar";
import styles from "./AppPage.module.scss";

class AppPage extends Component<{ children: ReactNode }> {
	render() {
		const { children } = this.props;

		return (
			<div className={styles["app-page"]}>
				<AnimatedBg />

				<div className={styles["app-page-body"]}>
					<AppActionbar />

					<div className={styles["app-page-content"]}>{children}</div>
				</div>
			</div>
		);
	}
}

export default AppPage;
