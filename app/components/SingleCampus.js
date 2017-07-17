import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampus } from '../store/redux/singleCampus';

var textCenter = {
	textAlign: 'center'
};

class SingleCampus extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('props', this.props);
		return (
			<div>
				<div>
					<div className="w3-container w3-padding-32" id="about">
						{this.props.currentCampus
							? <div className="w3-content">
									<h3
										className="w3-border-bottom w3-border-light-grey w3-padding-16"
										style={textCenter}
									>
										<b>
											{this.props.currentCampus.name}
										</b>
									</h3>
									<div className="w3-col l6 m6 w3-margin-bottom">
										<img src={this.props.currentCampus.image} width="400" height="220" />
									</div>

									<div className="w3-col l6 m6 w3-margin-bottom">
										<Link to="/students" className="btn-lg">
											Click to see Students of {this.props.currentCampus.name}
										</Link>
									</div>

									<div className="w3-col l6 m6 w3-margin-bottom">
										<p>
											{this.props.currentCampus.description}
										</p>
									</div>
								</div>
							: <h3>Nothing Here</h3>}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = function(state, ownProps) {
	return {
		selectedCampus: ownProps.match.params.campusId,
		campuses: state.campuses,
		currentCampus: state.campuses.find(campus => campus.id === +ownProps.match.params.campusId)
	};
};

const mapDispatchToProps = dispatch => ({
	fetchCampus: () => {
		dispatch(fetchCampus());
	}
});

const singleCampusConnector = connect(mapStateToProps, mapDispatchToProps);
const SingleCampusContainer = singleCampusConnector(SingleCampus);
export default SingleCampusContainer;
