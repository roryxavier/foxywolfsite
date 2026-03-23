import { Link } from "@tanstack/react-router";
import { Component } from "react";
import styles from "./AppActionbar.module.scss";

class AppActionbar extends Component {
	render() {
		return (
			<div className={styles["app-actionbar"]}>
				<Link to={"/"}>Home</Link>
				<Link to={"/clock/fox"}>Fox Clock</Link>
			</div>
		);
	}
}

export default AppActionbar;
