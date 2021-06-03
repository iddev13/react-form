import { connect } from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => {
	return {
		headerNav: state.nav.headerNav
	}
}

const NavContainer = connect(mapStateToProps, {

})(Nav);

export default NavContainer;