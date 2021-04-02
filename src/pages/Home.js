import React from 'react';
import SearchBar from '../components/SearchBar';
import City from '../components/City';

function Home({ match }) {
	return (
		<div className="d-flex flex-column align-items-center">
			<SearchBar />
			<City match={match} />
		</div>
	);
}

export default Home;
