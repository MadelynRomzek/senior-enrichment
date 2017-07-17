import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeUser } from '../store/redux/users';

var style100 = {
	width: '100%'
};

var textCenter = {
	textAlign: 'center'
};

class AllUsers extends Component {
	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
	}
	render() {
		const users = this.props.users;
		return (
			<div>
				<div className="w3-container w3-padding-32" id="projects">
					<h3
						className="w3-border-bottom w3-border-light-grey w3-padding-16 text-align:center"
						style={textCenter}
					>
						<b>Students</b>
					</h3>
				</div>

				<div className="w3-row-padding">
					{users.map(user =>
						<div className="w3-col l3 m6 w3-margin-bottom">
							<Link to={`/students/${user.id}`}>
								<div className="w3-display-container">
									<div className="w3-display-topleft w3-black w3-padding">
										{user.name}
									</div>
									<img src={user.image} style={style100} width="600" height="220" />
									<div>
										<b>Email: </b>
										{user.email}
									</div>
									<div>
										<b>Graduation Year: </b>
										{user.gradYear}
									</div>
								</div>
							</Link>
						</div>
					)}
				</div>
				<div className="w3-container w3-padding-32">
					<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Add a new student</h3>
					<form onSubmit={this.submitHandler}>
						<input className="w3-input" type="text" placeholder="Name" required name="name" />
						<input className="w3-input" type="text" placeholder="Email" required name="email" />
						<input
							className="w3-input"
							type="text"
							placeholder="Graduation Year"
							required
							name="gradYear"
						/>
						<button className="w3-button w3-black w3-section" type="submit">
							<i className="fa fa-paper-plane" /> Submit
						</button>
					</form>
				</div>
			</div>
		);
	}

	submitHandler(e) {
		e.preventDefault();
		const newUser = {
			name: e.target.name.value,
			email: e.target.email.value,
			gradYear: e.target.gradYear.value
		};
		this.props.makeUser(newUser);
	}
}

const mapStateToProps = function(state) {
	return {
		users: state.users
	};
};

const mapDispatchToProps = { makeUser };

const allUsersConnector = connect(mapStateToProps, mapDispatchToProps);
const AllUsersContainer = allUsersConnector(AllUsers);
export default AllUsersContainer;
