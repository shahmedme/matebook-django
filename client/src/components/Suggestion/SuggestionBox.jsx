import React, { Component, Fragment } from "react";
import { Breakpoint } from "react-socks";

export default class SuggestionBox extends Component {
	state = {
		blue: false,
	};

	handleToggle = () => {
		this.setState({ blue: !this.state.blue });
	};

	render() {
		return (
			<Fragment>
				<Breakpoint large up>
					<div className="card">
						<div className="p-3">
							<p className="sidebar">Suggested for you</p>
							{/* <button onClick={this.handleToggle}>Click Me</button> */}
						</div>
					</div>
				</Breakpoint>

				<Breakpoint medium down>
					<div className="card">
						<div className="p-3">
							<p className="sidebar">
								This feature isn't available on small devices
							</p>
							<button onClick={this.handleToggle}>Click Me</button>
						</div>
					</div>
				</Breakpoint>

				<style jsx>{`
					p.sidebar {
						color: ${this.state.blue ? "blue" : ""};
					}
				`}</style>
			</Fragment>
		);
	}
}
