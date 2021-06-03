import PostReduxForm from "./PostForm";
import './Post.css';


const Post = (props) => {

	const onAddPostText = (values) => {
		props.addPostPosts(values.post)
		console.log(values);
	}

	return (
		<section className="section">
			<h2>Post</h2>
			<div className="postList">
				<ul>
					{props.posts.map((elem) => {
						return <li key={elem.id}>{elem.message}</li>
					})}
				</ul>
			</div>
			<button onClick={() => { console.log(props); }}>PUSH</button>
			<PostReduxForm {...props} onSubmit={onAddPostText} />
		</section>
	)
}

export default Post;