import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteData from '../components/FavoriteData';

function Favorites() {
	const favorites = useSelector((state) => state.favorites);

	return (
		<div className="FavoritesContainer d-flex flex-row justify-content-between flex-wrap p-4 w-100">
			{favorites.map((city) => <FavoriteData key={city.Key} city={city} />)}
		</div>
	);
}

export default Favorites;
