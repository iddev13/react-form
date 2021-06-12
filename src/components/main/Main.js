import { Route } from 'react-router';
import HomeContainer from '../pages/home/HomeContainer';
import PostContainer from '../pages/post/PostContainer';
import SimpleContainer from '../pages/simple/SimpleContainer';
import './Main.css';

const Main = () => {
	return (
		<main className="main">
			<Route exact path="/" render={() => <HomeContainer />} />
			<Route path="/post" render={() => <PostContainer />} />
			<Route path="/simple" render={() => <SimpleContainer />} />
		</main>
	)
}

export default Main;