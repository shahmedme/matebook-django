import React, { Component } from "react";
import NavbarTwo from "../components/Navbar/NavbarTwo";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import AskBox from "../components/AskBox/AskBox";
import SuggestionBox from "../components/Suggestion/SuggestionBox";
import Timeline from "../components/Timeline/Timeline";

export default class HomePage extends Component {
	render() {
		return (
			<div className="bg-def">
				<NavbarTwo />
				<div className="container-fluid py-3">
					<div className="row">
						<div className="offset-md-1"></div>
						<div className="col-md-3">
							<ProfileCard />
						</div>
						<div className="col-md-4">
							<AskBox />
							<Timeline />
						</div>
						<div className="col-md-3">
							<SuggestionBox />
						</div>
						<div className="offset-md-1"></div>
					</div>
				</div>
			</div>
		);
	}
}
