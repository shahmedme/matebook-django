import React, { Component, Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NavbarTwo from "../../components/Navbar/NavbarTwo";
import FooterTwo from "../../components/Footer/FooterTwo";
import ProfileStats from "../../components/Profile/ProfileStats";
import AboutCard from "./AboutCard";
import { educationData, expData } from "../../data/profile";
import "./ProfilePage.scss";

export default class ProfilePage extends Component {
	render() {
		return (
			<div className="bg-def profile-page">
				<NavbarTwo />
				<section className="cover">
					<div className="shade h-100">
						<div className="container h-100">
							<div className="d-flex align-items-end h-100 pb-4 info">
								<div className="propic">
									<img
										src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
										alt="pro pic"
										className="img-fluid"
									/>
								</div>
								<div className="ml-3 info-content">
									<h3>
										<strong>Robert Downey Jr.</strong>
									</h3>
									<div className="d-flex">
										<div className="d-flex school">
											<span class="material-icons">apartment</span>
											<h5 className="ml-2">
												Daffodil International University
											</h5>
										</div>
										<div className="d-flex ml-4 location">
											<span class="material-icons">location_on</span>
											<h5 className="ml-2">Dhaka, Bangladesh</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<Tabe />
				</section>
				<FooterTwo />
			</div>
		);
	}
}

class Tabe extends Component {
	render() {
		return (
			<Fragment>
				<Tabs>
					<TabList className="list-unstyled tab-bar">
						<div className="container d-flex">
							<Tab className="tab">Profile</Tab>
							<Tab className="tab">About</Tab>
						</div>
					</TabList>

					<div className="container">
						<TabPanel>
							<ProfileStats />
						</TabPanel>
						<TabPanel>
							<AboutCard title="Experience" data={expData} />
							<AboutCard
								className="mt-4"
								title="Education"
								data={educationData}
							/>
						</TabPanel>
					</div>
				</Tabs>
				<style jsx global>{`
					.tab-bar {
						background: white;
						color: #252e38;
					}

					.tab {
						padding: 20px 30px 20px 0px;
						cursor: pointer;
						text-transform: uppercase;
						font-size: 14px;
						font-weight: 600;
					}

					.tab:focus {
						outline: none;
					}
				`}</style>
			</Fragment>
		);
	}
}
