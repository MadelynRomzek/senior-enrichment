import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AllCampuses extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    const {campuses} = this.props;
		return (
			<div>
				<div className="section lead" />
				<div className="container">
					<h3>Campuses</h3>
					<div className="row">
						{campuses.map(campus =>
							<div className="col-lg-6" key={campus.id}>
								<Link to={`/campuses/${campus.id}`}>
									<li className="campusListElt">
										{campus.name}
										<a href="#">
											<img className="media-object" src={campus.image} alt="image" />
										</a>
									</li>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		campuses: state.campuses,
		selectedCampus: state.selectedCampus
	};
};

const mapDispatch = dispatch => ({
	// fetchSelectedCampus: () => {
	// 	dispatch(fetchCampus());
	// }
});

const connectedAllCampuses = connect(mapStateToProps, mapDispatch)(AllCampuses);
export default connectedAllCampuses;

// export default connect(mapStateToProps, mapDispatch)(SingleCampus);
