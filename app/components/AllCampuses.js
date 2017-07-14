import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const clickHandler = function(e) {

}

function AllCampuses({ campuses }) {
	return (
		<div>
			<div className="section lead" />
			<div className="container">
				<h3>Campuses</h3>
				<div className="row">
					{campuses.map(campus =>
						<div className="col-lg-6" key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`}>
							<li className="campusListElt">
								{campus.name}
								<a href="#">
									<img className="media-object" src={campus.image} alt="image"
                  onClick={clickHandler}/>
								</a>
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
		campuses: state.campuses
	};
};

const allCampusesConnector = connect(mapStateToProps);
const AllCampusesContainer = allCampusesConnector(AllCampuses);
export default AllCampusesContainer;
