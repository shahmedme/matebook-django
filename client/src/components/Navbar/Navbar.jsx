import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

export default class Navbar extends Component {
	render() {
		return (
			<nav
				id="navbar-main"
				class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom"
			>
				<div class="container">
					<Link to="/" class="navbar-brand mr-lg-5">
						<img src={Logo} />
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbar_global"
						aria-controls="navbar_global"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="navbar-collapse collapse" id="navbar_global">
						<div class="navbar-collapse-header">
							<div class="row">
								<div class="col-6 collapse-brand">
									<a href="#">
										<img src={Logo} />
									</a>
								</div>
								<div class="col-6 collapse-close">
									<button
										type="button"
										class="navbar-toggler"
										data-toggle="collapse"
										data-target="#navbar_global"
										aria-controls="navbar_global"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										<span></span>
										<span></span>
									</button>
								</div>
							</div>
						</div>
						<ul class="navbar-nav align-items-lg-center ml-lg-auto">
							<li class="nav-item d-none d-lg-block ml-lg-4">
								<Link to="/signin" class="btn btn-neutral btn-icon">
									<span class="nav-link-inner--text">Sign In</span>
								</Link>
								<Link to="/signup" class="btn btn-neutral btn-icon">
									<span class="nav-link-inner--text">Sign Up</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
