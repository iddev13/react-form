
import Logo from '../common/logo/Logo';
import NavContainer from './header-nav/NavContainer';
import './Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Logo />
					<NavContainer />
				</div>
			</div>
		</header>
	)
}

export default Header;