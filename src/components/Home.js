import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<div className="contents">
				<div className="green-pics pics content">
					<img src={require('../images/green-apples.jpg')} alt="Green apples" />
				</div>
				<div className="yellow-pics pics content">
					<img src={require('../images/bananas.jpeg')} alt="Bananas" />
					<Link to="/blog">
						<button className="blog">Go to BLOG</button>
					</Link>
				</div>
				<div className="red-pics pics content">
					<img src={require('../images/carrots.jpg')} alt="Carrots" />
				</div>
				<div className="green-text text content">
					<p>Go to store</p>
					<Link to="/store">
						<button>BUY</button>
					</Link>
				</div>
				<div className="yellow-text text content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta quos sint ratione maxime
						labore tenetur nemo quod iure tempore adipisci unde perferendis, ipsa obcaecati voluptas
						aspernatur rerum ipsam perspiciatis!
					</p>
				</div>
				<div className="red-text text content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta quos sint ratione maxime
					labore tenetur nemo quod iure tempore adipisci unde perferendis, ipsa obcaecati voluptas aspernatur
					rerum ipsam perspiciatis!
				</div>
				<div className="blue-text text content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta quos sint ratione maxime
					labore tenetur nemo quod iure tempore adipisci unde perferendis, ipsa obcaecati voluptas aspernatur
					rerum ipsam perspiciatis!
				</div>
				<footer className="text content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta quos sint ratione maxime
						labore tenetur nemo quod iure tempore adipisci unde perferendis, ipsa obcaecati voluptas
						aspernatur rerum ipsam perspiciatis!
					</p>
				</footer>
			</div>
		);
	}
}

export default Home;
