import React, { Component } from "react";

export default class FeatureTwo extends Component {
	render() {
		return (
			<div class="section features-1">
				<div class="container">
					<div class="row">
						<div class="col-md-8 mx-auto text-center mb-5">
							<span class="badge badge-primary badge-pill mb-3">Features</span>
							<h3 class="display-3">CADMUS is here for</h3>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<div class="info">
								<div class="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
									<i class="fa fa-users"></i>
								</div>
								<h6 class="info-title text-uppercase text-primary">
									Q&amp;A Community
								</h6>
								<p class="description opacity-8">
									We get insulted by others, lose trust for those others. We get
									back stabbed by friends. It becomes harder for us to give
									others a hand.
								</p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="info">
								<div class="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
									<i class="fa fa-play"></i>
								</div>
								<h6 class="info-title text-uppercase text-success">
									Educational Videos
								</h6>
								<p class="description opacity-8">
									Don't get your heart broken by people we love, even that we
									give them all we have. Then we lose family over time. As we
									live, our hearts turn colder.
								</p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="info">
								<div class="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
									<i class="ni ni-world"></i>
								</div>
								<h6 class="info-title text-uppercase text-warning">
									Startup Grooming
								</h6>
								<p class="description opacity-8">
									What else could rust the heart more over time? Blackgold. The
									time is now for it to be okay to be great. or being a bright
									color. For standing out.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
