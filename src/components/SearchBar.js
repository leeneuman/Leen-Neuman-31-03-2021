import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCity } from '../store/actions';
import { getSuggestions } from '../api/WeatherAPI';

function SearchBar() {
	const dispatch = useDispatch();
	const [ searchText, setSearchText ] = useState('');
	const [ hintData, setHintData ] = useState([]);

	const getData = async () => {
		return await getSuggestions(searchText);
	};

	const setData = () => {
		getData().then((res) => setHintData(res.data)).catch((err) => console.log(err));
	};

	useEffect(
		() => {
			if (searchText.length > 0 && /^[A-Za-z -]*$/.test(searchText)) setData();
		},
		[ searchText ]
	);

	const handleChange = (event) => {
		setSearchText(event.target.value);
	};

	const handleSelectCity = (city) => {
		dispatch(updateCity(city));
		setHintData([]);
		setSearchText('');
	};

	return (
		<div className="w-50 position-relative">
			<input
				className="SearchBar-input w-100 mt-5"
				type="text"
				value={searchText}
				onChange={handleChange}
				placeholder="Search for a city name..."
				title="English characters only."
			/>

			{searchText.length > 0 &&
			hintData.length > 0 && (
				<div className="position-absolute w-100 bg-white border" style={{ zIndex: '1' }}>
					{(hintData || []).map((city) => (
						<div
							className="p-1"
							key={city.Key}
							style={{ cursor: 'pointer' }}
							onClick={() => handleSelectCity(city)}
						>
							{`${city.LocalizedName}, ${city.Country.LocalizedName}`}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default SearchBar;
