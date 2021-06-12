import { connect } from "react-redux";
import { addSimplePost } from '../../../redux/reducers/simple-reducer';
import Simple from "./Simple";

let mapStateToProps = (state) => {
	return {
		simplePost: state.simple.simplePost
	}
}

const SimpleContainer = connect(mapStateToProps, { addSimplePost })(Simple);

export default SimpleContainer;