import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarTwo.scss";
import Logo from "../../assets/img/facebook.png";

export default class NavbarTwo extends Component {
	render() {
		return (
			<div className="navbar navbar-expand-lg py-2 dash-nav">
				<div className="container-fluid">
					<div className="d-flex align-items-center">
						<Link to="/home" className="navbar-brand">
							<img src={Logo} style={{ height: "35px" }} />
						</Link>
						<div className="form-group m-0">
							<div className="input-group input-group-alternative">
								<div className="input-group-prepend" style={{ height: "37px" }}>
									<span className="input-group-text">
										<span className="material-icons mt-1">search</span>
									</span>
								</div>
								<input
									className="form-control"
									placeholder="Search"
									type="text"
									style={{ height: "37px" }}
								/>
							</div>
						</div>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto midd">
							<li className="nav-item">
								<Link to="/home" className="nav-link py-2">
									<span className="material-icons">home</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/videos" className="nav-link py-2">
									<span className="material-icons">ondemand_video</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/quiz" className="nav-link py-2">
									<span className="material-icons">school</span>
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto align-items-center">
							<li className="nav-item">
								<Link to="/profile" className="nav-link nav-avatar-wrapper">
									<div className="d-inline-block nav-avatar">
										<img
											src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
											className="img-fluid"
										/>
									</div>
									<span className="mx-2 name">Robert</span>
								</Link>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link py-2 px-1 rounded-icon">
									<span className="material-icons">notifications</span>
								</a>
							</li>
							<li className="nav-item">
								<div class="dropdown show">
									<a
										class="nav-link py-2 px-1 rounded-icon"
										href="#"
										role="button"
										id="dropdownMenuLink"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<span className="material-icons">arrow_drop_down</span>
									</a>

									<div
										class="dropdown-menu dropdown-menu-right"
										aria-labelledby="dropdownMenuLink"
									>
										<a class="dropdown-item d-flex align-items-center" href="#">
											<span className="rounded-icon">
												<span class="material-icons">settings</span>
											</span>
											<span className="ml-2">Settings &amp; Privacy</span>
										</a>
										<a class="dropdown-item d-flex align-items-center" href="#">
											<span className="rounded-icon">
												<span class="material-icons">help</span>
											</span>
											<span className="ml-2">Help &amp; Support</span>
										</a>
										<a class="dropdown-item d-flex align-items-center" href="#">
											<span className="rounded-icon">
												<span class="material-icons">exit_to_app</span>
											</span>
											<span className="ml-2">Logout</span>
										</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
