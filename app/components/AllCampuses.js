import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeCampus } from "../store/redux/campuses";

var style100 = {
	width: '100%'
};

var textCenter = {
	textAlign: 'center'
};

class AllCampuses extends Component {
	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
	}

	render() {
		console.log(this.props)
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

					{campuses.length
					?
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
			: <h3>Nothing Here</h3> }

				<div className="w3-container w3-padding-32">
					<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Add a new campus</h3>
					<form onSubmit={this.submitHandler}>
						<input className="w3-input" type="text" placeholder="Name" required name="name" />
						<input
							className="w3-input w3-section"
							type="text"
							placeholder="Description"
							required
							name="description" />
						<button className="w3-button w3-black w3-section" type="submit">
							<i className="fa fa-paper-plane" /> Submit
						</button>
					</form>
				</div>
			</div>
		);
	}

	submitHandler (e) {
		e.preventDefault();
		const newCampus = {
      name: e.target.name.value,
      description: e.target.description.value
    };
		this.props.makeCampus(newCampus)
  }
}

const mapStateToProps = function(state) {
	return {
		campuses: state.campuses,
		selectedCampus: state.selectedCampus
	};
};

const mapDispatchToProps = { makeCampus };

const connectedAllCampuses = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
export default connectedAllCampuses;
