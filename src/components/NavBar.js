import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import UnitSwitch from './UnitSwitch';

function NavBar() {
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
				<UnitSwitch />
			</div>
		</nav>
	);
}

export default NavBar;
