import { connect } from "react-redux";
import Post from "./Post";
import { addPostPosts } from '../../../redux/reducers/post-reducer';

let mapStateToProps = (state) => {
	return {
		posts: state.postPage.posts
	}
}

const PostContainer = connect(mapStateToProps, { addPostPosts })(Post);

export default PostContainer;