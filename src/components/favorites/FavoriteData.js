import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../../api/WeatherAPI';
import { Link } from 'react-router-dom';
import TempretureText from '../TemperatureText';

function FavoriteData({ city }) {
	const cityKey = city.Key;
	const [ currentWeather, setCurrentWeather ] = useState([]);

	const getData = async () => {
		return await getCurrentWeather(cityKey);
	};

	const setWeather = async () => {
		getData().then((res) => setCurrentWeather(res.data[0])).catch((err) => alert(err));
	};

	useEffect(
		() => {
			if (cityKey) setWeather();
		},
		[ cityKey ]
	);

	if (!cityKey || currentWeather.length === 0) return null;

	return (
		<Link
			className="d-flex flex-column align-items-center card p-4 mt-4 mr-4 justify-content-between text-decoration-none text-reset text-center"
			style={{ height: '200px', width: '200px' }}
			to={`/city/${city.LocalizedName}`}
		>
			<div className="d-flex flex-column align-items-center">
				<h5>{city.LocalizedName}</h5>
				<TempretureText type="current" data={currentWeather} />
			</div>

			<h4>{currentWeather.WeatherText}</h4>
		</Link>
	);
}

export default FavoriteData;
