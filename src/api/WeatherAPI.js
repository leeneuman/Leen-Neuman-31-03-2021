import axios from 'axios';
const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com';
const API_KEY = 'OfCI6lDNsXooUdoBYML16sS9XfxcJlV3';

export const getSuggestions = (searchText) => {
	return axios.get(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchText}`, {
		headers: { Accept: 'application/json' }
	});
};

export const getCurrentWeather = (id) => {
	return axios.get(`${BASE_URL}/currentconditions/v1/${id}?apikey=${API_KEY}`, {
		headers: { Accept: 'application/json' }
	});
};

export const getForcast = (id) => {
	return axios.get(`${BASE_URL}/forecasts/v1/daily/5day/${id}?apikey=${API_KEY}&metric=true`, {
		headers: { Accept: 'application/json' }
	});
};
