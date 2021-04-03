import React from 'react';
import TempretureText from '../TemperatureText';

const DAYS_OF_WEEK = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

function Forcast({ day }) {
	const date = new Date(day.Date);

	return (
		<div className="d-flex flex-column align-items-center card p-4 mt-2" style={{ minWidth: '150px' }}>
			<h5>{DAYS_OF_WEEK[date.getDay()]}</h5>
			<div>
				Lo: <TempretureText type="forcast-lo" data={day} />
			</div>
			<div>
				Hi: <TempretureText type="forcast-hi" data={day} />
			</div>
		</div>
	);
}

export default Forcast;
