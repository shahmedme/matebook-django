import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		return (
			<footer class="footer">
				<div class="container">
					<div class="row row-grid align-items-center mb-5">
						<div class="col-lg-6">
							<h3 class="text-primary font-weight-light mb-2">Be Social!!</h3>
							<h4 class="mb-0 font-weight-light">
								Let's get in touch on any of these platforms.
							</h4>
						</div>
						<div class="col-lg-6 text-lg-center btn-wrapper">
							<button
								target="_blank"
								href="#"
								rel="nofollow"
								class="btn btn-icon-only btn-twitter rounded-circle"
								data-toggle="tooltip"
								data-original-title="Follow us"
							>
								<span class="btn-inner--icon">
									<i class="fa fa-twitter"></i>
								</span>
							</button>
							<button
								target="_blank"
								href="#"
								rel="nofollow"
								class="btn-icon-only rounded-circle btn btn-facebook"
								data-toggle="tooltip"
								data-original-title="Like us"
							>
								<span class="btn-inner--icon">
									<i class="fab fa-facebook"></i>
								</span>
							</button>
							<button
								target="_blank"
								href="#"
								rel="nofollow"
								class="btn btn-icon-only btn-youtube rounded-circle"
								data-toggle="tooltip"
								data-original-title="Follow us"
							>
								<span class="btn-inner--icon">
									<i class="fa fa-youtube"></i>
								</span>
							</button>
							<button
								target="_blank"
								href="#"
								rel="nofollow"
								class="btn btn-icon-only btn-facebook rounded-circle"
								data-toggle="tooltip"
								data-original-title=""
							>
								<span class="btn-inner--icon">
									<i class="fa fa-linkedin"></i>
								</span>
							</button>
						</div>
					</div>
					<hr />
					<div class="row align-items-center justify-content-md-between">
						<div class="col-md-6">
							<div class="copyright">
								&copy; 2020{" "}
								<a href="#" target="_blank">
									CADMUS
								</a>
								.
							</div>
						</div>
						<div class="col-md-6">
							<ul class="nav nav-footer justify-content-end">
								<li class="nav-item">
									<a href="#" class="nav-link" target="_blank">
										About Us
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" target="_blank">
										Blog
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" target="_blank">
										Terms
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
