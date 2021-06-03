import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
	return (
		<nav className="headerNav">
			<ul className="headerList">
				{props.headerNav.map(elem => {
					return <li key={elem.id}><NavLink to={elem.address}>{elem.page}</NavLink></li>
				})}
			</ul>
		</nav>
	)
}

export default Nav;
