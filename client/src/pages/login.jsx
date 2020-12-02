import React, { Component, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { Link, Redirect } from "react-router-dom";
import { registerRoute } from "../endpoints";
import artboard from "../assets/img/artboard.png";

export default class Auth extends Component {
	state = {
		showAlert: false,
		alertType: null,
		alertMsg: "User Created Successfully",
	};

	handleRegister = (user) => {
		axios
			.post(registerRoute, user)
			.then((res) => {
				this.setState({
					alertType: res.data.type,
					alertMsg: res.data.message,
					showAlert: true,
				});

				setTimeout(() => {
					this.setState({ showAlert: false });
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		let alertClass = classNames({
			alert: true,
			"alert-success": this.state.alertType === "success",
			"alert-danger": this.state.alertType === "error",
			"alert-dismissible": true,
			fade: true,
			show: true,
		});

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
							<div className="col-md-5 offset-md-1">
								<Register handleRegister={this.handleRegister} />
							</div>
						</div>
					</div>
				</main>
				{this.state.showAlert ? (
					<div className={alertClass} role="alert">
						{this.state.alertMsg}
						<button
							type="button"
							class="close"
							onClick={() => {
								this.setState({ showAlert: false });
							}}
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				) : (
					""
				)}
			</div>
		);
	}
}

class Register extends Component {
	state = {
		firstName: "Shakil",
		lastName: "Ahmed",
		username: "shakil1",
		email: "shakilahmed@gmail.com",
		password: "123456",
	};

	handleFormInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();

		this.props.handleRegister(this.state);

		this.setState({
			firstName: "",
			lastName: "",
			username: "",
			email: "",
			password: "",
		});
	};

	render() {
		return (
			<div className="signup">
				<h4 className="text-center title">Sign Up Now!</h4>
				<form className="mt-4" onSubmit={this.handleFormSubmit}>
					<div className="form-row">
						<div className="col-md-6">
							<div className="form-group">
								<input
									type="text"
									placeholder="First Name"
									class="form-control form-control-alternative"
									name="firstName"
									value={this.state.firstName}
									onChange={this.handleFormInput}
								/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<input
									type="text"
									placeholder="Last Name"
									class="form-control form-control-alternative"
									name="lastName"
									value={this.state.lastName}
									onChange={this.handleFormInput}
								/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<input
							type="text"
							placeholder="Username"
							class="form-control form-control-alternative"
							name="username"
							value={this.state.username}
							onChange={this.handleFormInput}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							placeholder="Email"
							class="form-control form-control-alternative"
							name="email"
							value={this.state.email}
							onChange={this.handleFormInput}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							class="form-control form-control-alternative"
							name="password"
							value={this.state.password}
							onChange={this.handleFormInput}
						/>
					</div>

					<input type="submit" class="btn btn-info d-block w-100" />
				</form>
			</div>
		);
	}
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
