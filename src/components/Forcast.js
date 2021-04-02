import React from 'react';
const DAYS_OF_WEEK = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

function Forcast({ day }) {
	const date = new Date(day.Date);

	return (
		<div className="d-flex flex-column align-items-center card p-4 mt-2">
			<h5>{DAYS_OF_WEEK[date.getDay()]}</h5>
			<span>Lo: {day.Temperature.Minimum.Value} &#8451;</span>
			<span>Hi: {day.Temperature.Maximum.Value} &#8451;</span>
		</div>
	);
}

export default Forcast;
