import React from 'react';
import Food from './components/Food';

class App extends React.Component {
	render() {
		return (
			<div className="organic-food-market">
				<div className="menu">
					<Food />
					<Food />
					<Food />
					<Food />
					<Food />
					<Food />
					<Food />
				</div>
			</div>
		);
	}
}

export default App;
