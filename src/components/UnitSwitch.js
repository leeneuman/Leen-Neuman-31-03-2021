import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUnits } from '../store/actions';

function UnitSwitch() {
	const dispatch = useDispatch();

	const setUnits = (val) => {
		dispatch(updateUnits(val));
	};

	return (
		<div class="dropdown">
			<button
				class="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenu2"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				Units
			</button>
			<div class="dropdown-menu" aria-labelledby="dropdownMenu2">
				<button class="dropdown-item" type="button" onClick={() => setUnits('Metric')}>
					Metric
				</button>
				<button class="dropdown-item" type="button" onClick={() => setUnits('Imperial')}>
					Imperial
				</button>
			</div>
		</div>
	);
}

export default UnitSwitch;
