import React, { Component } from "react";

export default class FooterTwo extends Component {
	render() {
		return (
			<div
				className="d-flex justify-content-center py-3 mt-4"
				style={{ background: "white" }}
			>
				<p className="m-0" style={{ fontSize: "14px" }}>
					&copy; All Rights Reserved
				</p>
			</div>
		);
	}
}
