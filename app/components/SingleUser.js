import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../store/redux/singleUser';

/*

CONNIE: once again about the reusablility between SingleUser and SingleCampus
They are almost identical! Unless there was some UI that really differentiated
how the user view from the campus view, it seems much better to simply reuse the
same component with different props. That being said, I do think there might be
some campus-specific logic that should be different from students, which makes
this separation very sensible. However, that difference in functionality does
not appear to be implemented or reflected anywhere in the view currently.

*/


var textCenter = {
	textAlign: 'center'
};

class SingleUser extends Component {
	// CONNNIE: a stateless component should be a pure function
	constructor(props) {
		super(props);
	}

	render() {
		console.log('props', this.props);
		return (
			<div>
				<div>
					<div className="w3-container w3-padding-32" id="about">
						{this.props.currentUser
							? <div className="w3-content">
									<h3
										className="w3-border-bottom w3-border-light-grey w3-padding-16"
										style={textCenter}
									>
										<b>
											{this.props.currentUser.name}
										</b>
									</h3>
									<div className="w3-col l6 m6 w3-margin-bottom">
										<img src={this.props.currentUser.image} width="400" height="400" />
									</div>

									<div className="w3-col l6 m6 w3-margin-bottom" />

									<div className="w3-col l6 m6 w3-margin-bottom">
										<p>
											<b>Email: </b>
											{this.props.currentUser.email}
										</p>
										<p>
											<b>Graduation year: </b>
											{this.props.currentUser.gradYear}
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
		selectedUser: +ownProps.match.params.studentId,
		users: state.users,
		currentUser: state.users.find(user => +user.id === +ownProps.match.params.studentId)
	};
};

const mapDispatchToProps = dispatch => ({
	fetchUser: () => {
		dispatch(fetchUser());
	}
});

const singleUserConnector = connect(mapStateToProps, mapDispatchToProps);
const SingleUserContainer = singleUserConnector(SingleUser);
export default SingleUserContainer;
