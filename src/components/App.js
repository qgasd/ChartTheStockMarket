import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import CollapsibleCon from './sideBar/CollapsibleCon';
import ChartCon from './chart/ChartCon';

class App extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					minHeight: '100vh',
					flexDirection: 'column'
				}}
			>
				<Header />
				<main className="grey">
					<div className="row">
						<div className="col s12 m9">
							<ChartCon />
						</div>
						<div className="col s12 m3">
							<CollapsibleCon />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
