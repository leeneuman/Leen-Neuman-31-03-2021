import favoritesReducer from './favorites';
import selectedCityReducer from './selectedCity';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	favorites: favoritesReducer,
	selectedCity: selectedCityReducer
});

export default rootReducers;
