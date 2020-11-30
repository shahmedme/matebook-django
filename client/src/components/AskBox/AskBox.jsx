import React, { Component, Fragment } from "react";
import classNames from "classnames";

export default class AskBox extends Component {
	state = {
		content: "",
	};

	handleInputChage = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const submitBtn = classNames({
			btn: true,
			"btn-primary": this.state.content,
			"btn-secondary": !this.state.content,
		});

		return (
			<Fragment>
				<div className="ask-box">
					<textarea
						name="content"
						id=""
						cols="30"
						rows="4"
						className="form-control form-control-alternative"
						placeholder="What are you looking for?"
						value={this.state.content}
						onChange={this.handleInputChage}
					></textarea>
					<div className="d-flex justify-content-between mt-2">
						<div>
							<a
								href="#"
								className="btn btn-secondary"
								style={{ lineHeight: "0px" }}
							>
								<span className="material-icons">videocam</span>
							</a>
							<a
								href="#"
								className="btn btn-secondary"
								style={{ lineHeight: "0px" }}
							>
								<span className="material-icons">photo</span>
							</a>
							<a
								href="#"
								className="btn btn-secondary"
								style={{ lineHeight: "0px" }}
							>
								<span className="material-icons">emoji_emotions</span>
							</a>
						</div>
						<a href="#" className={submitBtn}>
							Post
						</a>
					</div>
				</div>
				<style jsx>{`
					a.btn-secondary {
						color: #525f7f;
					}
				`}</style>
			</Fragment>
		);
	}
}
