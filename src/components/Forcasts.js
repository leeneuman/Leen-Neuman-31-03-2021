import React, { useEffect, useState } from 'react';
import { getForcast } from '../api/WeatherAPI';
import Forcast from './Forcast';

function Forcasts({ cityKey }) {
	const [ forcasts, setForcasts ] = useState([]);

	const getData = async () => {
		return await getForcast(cityKey);
	};

	const setData = () => {
		getData().then((res) => setForcasts(res.data)).catch((err) => alert(err));
	};

	useEffect(
		() => {
			if (cityKey) setData();
		},
		[ cityKey ]
	);

	if (!cityKey || forcasts.length === 0) return null;

	return (
		<div className="ForcastsContainer d-flex flex-row justify-content-between flex-wrap p-4 w-100">
			{forcasts.DailyForecasts.map((d) => <Forcast key={d.EpochDate} day={d} />)}
		</div>
	);
}

export default Forcasts;
