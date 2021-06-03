import { connect } from "react-redux";
import { addHomeLogin } from '../../../redux/reducers/home-reducer';
import Home from "./Home";

let mapStateToProps = (state) => {
	return {
		homePosts: state.homePage.homePosts
	}
}

const HomeContainer = connect(mapStateToProps, { addHomeLogin })(Home);

export default HomeContainer;