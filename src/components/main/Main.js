import { Route } from 'react-router';
import HomeContainer from '../pages/home/HomeContainer';
import PostContainer from '../pages/post/PostContainer';
import './Main.css';

const Main = () => {
	return (
		<main className="main">
			<Route exact path="/" render={() => <HomeContainer />} />
			<Route path="/post" render={() => <PostContainer />} />
		</main>
	)
}

export default Main;