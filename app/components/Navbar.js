import React from 'react';

export default function Navbar() {
	return (
		<nav className="navbar-header navbar-inverse navbar-fixed-top">
			<div className="container">
				<h3 className="navbar-brand">Margaret Hamilton Interplanetary Academy of JavaScript</h3>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="/">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<br />
						<li className="nav-item">
							<a className="nav-link" href="/campuses">
								Campuses
							</a>
						</li>
						<br />
						<li className="nav-item">
							<a className="nav-link" href="/students">
								Students
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
