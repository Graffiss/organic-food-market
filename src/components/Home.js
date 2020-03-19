import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div className="contents">
				<div className="green-pics pics content">
					<img src="./img/green-apples.jpg" alt="" />
				</div>
				<div className="yellow-pics pics content">
					<img src="./img/orange-fruits.jpg" alt="" />
				</div>
				<div className="red-pics pics content">
					<img src="./img/carrots.jpg" alt="" />
				</div>
				<div className="green-text text content">
					<p>Go to store</p>
					<button onClick={() => this.props.history.push('/store')}>BUY</button>
				</div>
				<div className="yellow-text text content" />
				<div className="red-text text content" />
				<div className="blue-text text content" />
				<footer />
			</div>
		);
	}
}

export default Home;
