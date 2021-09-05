import * as React from 'react';
import { BrowserRouter, Link, Route, Switch, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

import { IndexPage } from './pages';
import { RankingPage } from './pages/ranking';
import { Header } from './components/Header';
import { TermPage } from './pages/term';
import { store } from './store';

import 'xeltica-ui/dist/css/xeltica-ui.min.css';
import './style.scss';

const AppInner : React.VFC = () => {
	const $location = useLocation();

	return (
		<>
			<div className="container">
				{$location.pathname !== '/' && <Header hasTopLink />}
				<Switch>
					<Route exact path="/" component={IndexPage} />
					<Route exact path="/ranking" component={RankingPage} />
					<Route exact path="/term" component={TermPage} />
				</Switch>
				<footer className="text-center pa-5">
					<p>(C)2020-2021 Xeltica</p>
					<p><Link to="/term">利用規約</Link></p>
				</footer>
			</div>
		</>
	);
};

export const App: React.VFC = () => (
	<Provider store={store}>
		<BrowserRouter>
			<AppInner />
		</BrowserRouter>
	</Provider>
);