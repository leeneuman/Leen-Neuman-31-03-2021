import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUnits } from '../store/actions';

function NavBar() {
	const dispatch = useDispatch();

	const setUnits = (val) => {
		dispatch(updateUnits(val));
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Herolo Weather
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<NavLink
					exact
					to="/"
					className="nav-link text-white"
					activeStyle={{
						fontWeight: 'bold'
					}}
				>
					Home
				</NavLink>
				<NavLink
					exact
					to="/favorites"
					className="nav-link text-white"
					activeStyle={{
						fontWeight: 'bold'
					}}
				>
					Favorites
				</NavLink>
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
			</div>
		</nav>
	);
}

export default NavBar;
