import React, { Component } from "react";
import { questions } from "../../data/questions";

export default class Timeline extends Component {
	render() {
		return (
			<div>
				{questions.map((question) => (
					<Question data={question} />
				))}
			</div>
		);
	}
}

class Question extends Component {
	render() {
		return (
			<div className="card my-3">
				<div className="p-3">
					<strong>{this.props.data.title}</strong>
					<p>{this.props.data.description}</p>
					<div className="row">
						<div className="col-4">
							<div className="d-flex align-items-center">
								<span class="material-icons">thumb_up</span>
								<p className="m-0 ml-2">Like</p>
							</div>
						</div>
						<div className="col-4">
							<div className="d-flex align-items-center">
								<span class="material-icons">textsms</span>
								<p className="m-0 ml-2">Answer</p>
							</div>
						</div>
						<div className="col-4">
							<div className="d-flex align-items-center">
								<span class="material-icons">bookmark</span>
								<p className="m-0 ml-2">Save</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
