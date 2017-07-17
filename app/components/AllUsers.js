import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

var style100 = {
	width: '100%'
};

var textCenter = {
	textAlign: 'center'
};

function AllUsers({ users }) {
	return (
		<div>
			<div className="w3-container w3-padding-32" id="projects">
				<h3
					className="w3-border-bottom w3-border-light-grey w3-padding-16 text-align:center"
					style={textCenter}
				>
					<b>Students</b>
				</h3>
			</div>

			<div className="w3-row-padding">
				{users.map(user =>
					<div className="w3-col l3 m6 w3-margin-bottom">
						<Link to={`/students/${user.id}`}>
							<div className="w3-display-container">
								<div className="w3-display-topleft w3-black w3-padding">
									{user.name}
								</div>
								<img src={user.image} style={style100} width="600" height="220" />
								<div>
									<b>Email: </b>
									{user.email}
								</div>
								<div>
									<b>Graduation Year: </b>
									{user.gradYear}
								</div>
							</div>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = function(state) {
	return {
		users: state.users
	};
};

const allUsersConnector = connect(mapStateToProps);
const AllUsersContainer = allUsersConnector(AllUsers);
export default AllUsersContainer;
