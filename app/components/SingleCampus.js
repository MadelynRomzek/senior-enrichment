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
		return (<div>
			<div>
			<div className="w3-container w3-padding-32" id="about">
					<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16"><b>About</b></h3>

            {
              this.props.currentCampus
              ?
              <div>
						    <h3>Welcome to {this.props.currentCampus.name}!</h3>
                    <Link to="/students" className="btn-lg">Click to see Students of {this.props.currentCampus.name}</Link>

            {/* <div className="w3-display-container">
									<div className="w3-display-topleft w3-black w3-padding">
                <a href="#">
											<img className="profile-img" src={this.props.currentCampus.image} alt="image" width="200" height="200" />
										</a>
              </div>
              </div> */}

  						<div className="w3-col l6 m6 w3-margin-bottom">
								<h3>
										{this.props.currentCampus.name}</h3>

									<img src={this.props.currentCampus.name} width="200" height="220" />
								</div>








						<div className="w3-col l6 m6 w3-margin-bottom">
                    <p>{this.props.currentCampus.description}</p>
                    </div>

              </div>

              :
              <h3>Nothing Here</h3>
            }
					</div>
				</div>
      </div>
  // <div className="w3-container w3-padding-32" id="contact">
  //   <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
  //   <p>Lets get in touch and talk about your and our next project.</p>
  //   <form action="/action_page.php" target="_blank">
  //     <input className="w3-input" type="text" placeholder="Name" required name="Name" />
  //     <input className="w3-input w3-section" type="text" placeholder="Email" required name="Email" />
  //     <input className="w3-input w3-section" type="text" placeholder="Subject" required name="Subject" />
  //     <input className="w3-input w3-section" type="text" placeholder="Comment" required name="Comment" />
  //     <button className="w3-button w3-black w3-section" type="submit">
  //       <i className="fa fa-paper-plane"></i> SEND MESSAGE
  //     </button>
  //   </form>
  // </div>
  // </div>
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
