import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function AllUsers({users}) {
	return (
		<div>
			<div className="section lead" />
			<div className="container">
				<h3>Students</h3>
				<div className="row">
					{users.map(user =>
						<div className="col-lg-6" key={user.id}>
              <NavLink to={`/campuses/${user.id}`}>
							<li className="usersListElt">
								{user.name}
							</li>
            </NavLink>
						</div>
					)}
				</div>
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
