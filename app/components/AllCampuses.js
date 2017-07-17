import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

var style100 = {
	width: '100%'
};

var textCenter = {
	textAlign: 'center'
};

class AllCampuses extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { campuses } = this.props;
		return (
			<div>
				<div className="w3-container w3-padding-32" id="projects">
					<h3
						className="w3-border-bottom w3-border-light-grey w3-padding-16 text-align:center"
						style={textCenter}
					>
						<b>Campuses</b>
					</h3>
				</div>

				<div className="w3-row-padding">
					{campuses.map(campus =>
						<div className="w3-col l3 m6 w3-margin-bottom">
							<Link to={`/campuses/${campus.id}`}>
								<div className="w3-display-container">
									<div className="w3-display-topleft w3-black w3-padding">
										{campus.name}
									</div>
									<img src={campus.image} style={style100} width="600" height="220" />
								</div>
							</Link>
						</div>
					)}
				</div>
			</div>
		);
	}
}

// <div className="col-lg-6" key={campus.id}>
// 	<Link to={`/campuses/${campus.id}`}>
// 		<li className="campusListElt">
// 			{campus.name}
// 			<a href="#">
// 				<img className="media-object" src={campus.image} alt="image" />
// 			</a>
// 		</li>
// 	</Link>
// </div>
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
