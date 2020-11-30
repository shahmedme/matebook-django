import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import store from "./store";
import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import VideoLibraryPage from "./pages/VideoLibraryPage";
import QuizPage from "./pages/QuizPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Provider store={store}>
					<BreakpointProvider>
						<Router>
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route exact path="/login" component={Login} />
								<Route exact path="/videos" component={VideoLibraryPage} />
								<Route exact path="/quiz" component={QuizPage} />
								<Route exact path="/profile" component={ProfilePage} />
								<Route path="*" component={NotFoundPage} />
							</Switch>
						</Router>
					</BreakpointProvider>
				</Provider>
			</Fragment>
		);
	}
}
