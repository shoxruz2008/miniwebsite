import './App.css';

import Navbar from './componets/miniwebsite/Navbar';
import Hero from './componets/miniwebsite/Hero';
import Card from './componets/miniwebsite/Card';

import { data } from './data';

const App = () => {
	const cards = data.map((item) => {
		return (
			<Card
				key={item.id}
				img={item.coverImg}
				rating={item.stats.rating}
				reviewCount={item.stats.reviewCount}
				location={item.location}
				title={item.title}
				price={item.price}
			/>
		);
	});
	return (
		<div className="container">
			<Navbar />
			<Hero />

			<section className="cards-list">{cards}</section>
		</div>
	);
};

export default App;
