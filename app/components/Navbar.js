import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className="w3-top">
			<div className="w3-bar w3-white w3-wide w3-padding w3-card-2">
				<Link to="/" className="w3-bar-item w3-button">
					Margaret <b>Hamilton</b>
				</Link>
				<div className="w3-right w3-hide-small">
					<Link to="/" className="w3-bar-item w3-button">
						Home
					</Link>
					<Link to="/campuses" className="w3-bar-item w3-button">
						Campuses
					</Link>
					<Link to="/students" className="w3-bar-item w3-button">
						Students
					</Link>
				</div>
			</div>
		</div>
	);
}
