import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSuggestions } from '../api/WeatherAPI';
import { useDispatch } from 'react-redux';
import { updateCity } from '../store/actions';
import CityData from './CityData';
import Forcasts from './Forcasts';
const DEFAULT_CITY_NAME = 'tel aviv';

function City({ match }) {
	const dispatch = useDispatch();
	const city = useSelector((state) => state.selectedCity);
	const cityKey = city.Key;
	const cityNameFromRoute = match.params.name;

	const setDefaultCity = async () => {
		return await getSuggestions(DEFAULT_CITY_NAME);
	};

	const setCityFromRoute = async () => {
		return await getSuggestions(cityNameFromRoute);
	};

	useEffect(
		() => {
			if (!cityKey) {
				setDefaultCity().then((res) => dispatch(updateCity(res.data[0]))).catch((err) => alert(err));
			}
		},
		[ cityKey ]
	);

	useEffect(
		() => {
			if (cityNameFromRoute) {
				setCityFromRoute().then((res) => dispatch(updateCity(res.data[0]))).catch((err) => alert(err));
			}
		},
		[ cityNameFromRoute ]
	);

	if (city.length === 0 && !cityKey) return null;

	return (
		<div
			className="d-flex flex-column align-items-center p-4 mt-5 w-100 card"
			style={{ background: 'rgba(100, 100, 100, 0.1)' }}
		>
			<CityData city={city} />
			<Forcasts cityKey={cityKey} />
		</div>
	);
}

export default City;
