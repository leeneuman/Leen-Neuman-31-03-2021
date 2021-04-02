export const addFavorite = (city) => {
	return {
		type: 'ADD_FAVORITE',
		payload: {
			city
		}
	};
};

export const removeFavorite = (key) => {
	return {
		type: 'REMOVE_FAVORITE',
		payload: {
			key
		}
	};
};

export const updateCity = (city) => {
	return {
		type: 'UPDATE_CITY',
		payload: {
			city
		}
	};
};
