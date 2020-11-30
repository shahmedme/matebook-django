import React, { Component } from "react";
import "./ProfileStats.scss";

export default class ProfileStats extends Component {
	render() {
		return (
			<div className="profile-stats">
				<div className="row align-items-stretch">
					<div className="col-md-4">
						<div className="card">
							<div className="px-3 pt-3 content">
								<div className="d-flex justify-content-between">
									<strong>Progression</strong>
									<span class="material-icons">help</span>
								</div>
								<div className="midd">
									<img
										src="https://image.flaticon.com/icons/svg/1657/1657088.svg"
										alt="dd"
									/>
									<h3>
										<strong>Level 3</strong>
									</h3>
								</div>
							</div>
							<div className="bott">
								<div className="prog-bar">
									<div className="inner">19 / 100 XP</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
							<div className="px-3 pt-3 content">
								<div className="d-flex justify-content-between">
									<strong>Q&amp;A Rank</strong>
									<span class="material-icons">help</span>
								</div>
								<div className="midd">
									<img
										src="https://image.flaticon.com/icons/svg/1642/1642322.svg"
										alt="dd"
										style={{ width: "70px" }}
									/>
									<h3 className="mb-0 mt-3">
										<strong>
											9923 <sup>TH</sup>
										</strong>
									</h3>
									<h6>
										<strong>Begineer</strong>
									</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
							<div className="px-3 pt-3 content">
								<div className="d-flex justify-content-between">
									<strong>Watch Rank</strong>
									<span class="material-icons">help</span>
								</div>
								<div className="midd pt-1">
									<img
										src="https://image.flaticon.com/icons/svg/2972/2972128.svg"
										alt="dd"
										style={{ width: "70px" }}
									/>
									<h3 className="mb-0 mt-2">
										<strong>
											560 <sup>TH</sup>
										</strong>
									</h3>
									<h6>
										<strong>Intermediate</strong>
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="card mt-4" style={{ height: "200px" }}>
							<div className="d-flex justify-content-center align-items-center h-100">
								<h1>More Stats Here</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
