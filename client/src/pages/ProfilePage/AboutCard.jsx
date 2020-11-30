import React, { Component, Fragment } from "react";
import classNames from "classnames";

export default class AboutCard extends Component {
	render() {
		const rootClass = classNames("card p-4", this.props.className);

		return (
			<Fragment>
				<div className={rootClass}>
					<div className="d-flex justify-content-between header">
						<div className="title">
							<strong>{this.props.title}</strong>
						</div>
						<span className="material-icons">add</span>
					</div>
					<div className="body">
						{this.props.data.map((institution) => (
							<div className="mt-4 institution">
								<div className="d-flex align-items-start">
									<img
										src="https://image.flaticon.com/icons/svg/864/864102.svg"
										alt=""
									/>
									<div className="ml-4 w-100">
										<h6>
											<strong>{institution.name}</strong>
										</h6>
										<p>{institution.sub}</p>
										<small>{institution.from + "-" + institution.to}</small>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<style jsx>{`
					span {
						cursor: pointer;
					}
					p,
					h6 {
						margin: 0px;
					}

					img {
						width: 50px;
						height: auto;
					}
				`}</style>
			</Fragment>
		);
	}
}
