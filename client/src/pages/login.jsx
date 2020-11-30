import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import artboard from "../assets/img/artboard.png";

export default function Login() {
	return (
		<div className="login-page">
			<Navbar />
			<main className="d-flex align-items-center">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="img-wrapper">
								<img src={artboard} alt="landing" className="img-fluid" />
							</div>
						</div>
						<div className="col-md-5 offset-md-1 signup">
							<h4 className="text-center title">Sign Up Now!</h4>
							<form className="mt-4">
								<div className="form-row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="first_name">First Name</label>
											<input
												type="text"
												placeholder="First Name"
												class="form-control form-control-alternative"
												id="first_name"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="first_name">Last Name</label>
											<input
												type="text"
												placeholder="Last Name"
												class="form-control form-control-alternative"
												id="first_name"
											/>
										</div>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="first_name">Email</label>
									<input
										type="text"
										placeholder="Your Email"
										class="form-control form-control-alternative"
										id="first_name"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="first_name">Password</label>
									<input
										type="password"
										placeholder="Password"
										class="form-control form-control-alternative"
										id="first_name"
									/>
								</div>

								<input type="submit" class="btn btn-info d-block w-100" />
							</form>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

function Navbar() {
	const [redirect, setRedirect] = useState(false);

	let handleFormSubmit = (e) => {
		e.preventDefault();
		setRedirect(true);
	};

	return (
		<div className="navbar">
			<div className="container-fluid">
				<a href="#" className="brand">
					matebook
				</a>
				<div>
					<form className="form-inline" onSubmit={handleFormSubmit}>
						<input
							type="text"
							className="form-control"
							placeholder="username"
						/>
						<input
							type="password"
							className="form-control mx-2"
							placeholder="password"
						/>
						<button type="submit" className="login-btn">
							Login
						</button>
					</form>
				</div>
			</div>
			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
}
