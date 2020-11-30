import React, { Component, Fragment } from "react";
import "./ProfileCard.scss";
import Star from "../../assets/img/star.png";
import Money from "../../assets/img/money.png";
import Diamond from "../../assets/img/diamond.png";

export default class ProfileCard extends Component {
	render() {
		return (
			<Fragment>
				<div className="team-card">
					<div
						className="top-bg"
						style={{
							backgroundImage:
								"url(https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div className="text-center pt-5 pb-3 team-card-content">
						<img
							src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
							alt="#"
							className="img-fluid pro-pic"
						/>
						<h6 className="name">Robert Downey Jr.</h6>
						<p>Hi, I'm Robert Downey Jr. Better known as Ironman.</p>
						<div className="row">
							<div className="col-md-4">
								<img src={Star} className="coin-img" />
								<strong className="ml-1">19XP</strong>
							</div>
							<div className="col-md-4">
								<img src={Money} className="coin-img" />
								<strong className="ml-1">29530</strong>
							</div>
							<div className="col-md-4">
								<img src={Diamond} className="coin-img" />
								<strong className="ml-1">663</strong>
							</div>
						</div>
					</div>
				</div>
				<style jsx>
					{`
						.coin-img {
							width: 20px;
						}
					`}
				</style>
			</Fragment>
		);
	}
}
