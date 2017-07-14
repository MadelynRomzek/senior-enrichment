import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleUserContainer extends Component {
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
              this.props.currentUser
              ?
              <div>
						    <h3>{this.props.currentUser.name}'s Profile</h3>
                    <Link to="/students" className="btn-lg">Click to see Students of {this.props.currentUser.name}</Link>

                    <p>{this.props.currentCampus.email}</p>
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
    selectedUser: +ownProps.match.params.studentId,
    users: state.users,
    currentUser: state.users.find((user) => +user.id === +ownProps.match.params.studentId)
	};
};

const singleUserConnector = connect(mapStateToProps);
const singleUserContainer = singleUserConnector(SingleUserContainer);
export default SingleUserContainer;
