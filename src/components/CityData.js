import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/actions';
import { getCurrentWeather } from '../api/WeatherAPI';
import { useSelector } from 'react-redux';
import { addToLocalStorage } from '../helpers/dataHelpers';

function CityData({ city }) {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites);
	const [ currentWeather, setCurrentWeather ] = useState([]);
	const cityKey = city.Key;
	const isFavorite = favorites && favorites.filter((f) => f.Key === cityKey).length > 0;

	const getData = async () => {
		return await getCurrentWeather(cityKey);
	};

	useEffect(
		() => {
			if (cityKey) getData().then((res) => setCurrentWeather(res.data[0])).catch((err) => alert(err));
		},
		[ cityKey ]
	);

	if (!cityKey || currentWeather.length === 0) return null;

	const handleAddToFavorites = () => {
		dispatch(addFavorite(city));
		addToLocalStorage('favorites', [ ...favorites, city ]);
	};

	const handleRemoveFromFavorites = () => {
		dispatch(removeFavorite(cityKey));
		addToLocalStorage('favorites', [ ...favorites.filter((c) => c.Key !== cityKey) ]);
	};

	return (
		<div className="d-flex flex-column align-items-center p-4 w-100">
			<div className="d-flex flex-row justify-content-between w-100">
				<div className="d-flex flex-column">
					<h5>{`${city.LocalizedName}, ${city.Country.LocalizedName}`}</h5>
					<span>{currentWeather.Temperature.Metric.Value} &#8451;</span>
				</div>
				<div>
					<button
						className="btn btn-light"
						onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
					>
						{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
					</button>
					{isFavorite ? <i className="fas fa-heart fa-lg p-2" /> : <i className="far fa-heart fa-lg p-2" />}
				</div>
			</div>
			<h3>{currentWeather.WeatherText}</h3>
		</div>
	);
}

export default CityData;
