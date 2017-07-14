import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function AllUsers({users}) {

	return (
		<div>
			 <h3>Users</h3>
			<div className="row">
				{users.map(user =>
					<div className="col-xs-4" key={user.id}>
						<h5>
							<span>
								{user.name}
							</span>
						</h5>
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
