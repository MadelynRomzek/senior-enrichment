import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function AllCampuses({campuses}) {

	return (
		<div>
			 <h3>Campuses</h3>
			<div className="row">
				{campuses.map(campus =>
					<div className="col-xs-4" key={campus.id}>
						<h5>
							<span>
								{campus.name}
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
    campuses: state.campuses
  };
};

const allCampusesConnector = connect(mapStateToProps);
const AllCampusesContainer = allCampusesConnector(AllCampuses);
export default AllCampusesContainer;
