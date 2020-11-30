import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
	render() {
		return (
			<div>
				<h1>404 Not Found</h1>
				<Link to="/">Go Back</Link>
			</div>
		);
	}
}
