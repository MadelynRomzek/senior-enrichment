import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampus } from '../store/redux/singleCampus';

class SingleCampus extends Component {
	constructor(props) {
    super(props);
  }

	render() {
    console.log("props", this.props)
		return (
			<div>
				<div className="section lead" />
				<div className="container">
					<div className="row">
            {
              this.props.currentCampus
              ?
              <div>
						    <h3>Welcome to {this.props.currentCampus.name}!</h3>
                    <Link to="/students" className="btn-lg">Click to see Students of {this.props.currentCampus.name}</Link>
                <a href="#">
											<img className="profile-img" src={this.props.currentCampus.image} alt="image" />
										</a>
                    <p>{this.props.currentCampus.description}</p>
              </div>
              :
              <h3>Nothing Here</h3>
            }
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
    currentCampus: state.campuses.find((campus) => campus.id === +ownProps.match.params.campusId)
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
