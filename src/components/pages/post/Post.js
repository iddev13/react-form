import PostReduxForm from "./PostForm";
import './Post.css';


const Post = (props) => {

	const onAddPostText = (values) => {
		props.addPostPosts(values)
		console.log(values);
	}

	return (
		<section className="section">

			<div className="postLists">
				<ul>
					{props.posts.map((elem) => {
						return <li key={elem.id}>{elem.login}</li>
					})}
				</ul>
				<ul>
					{props.posts.map((elem) => {
						return <li key={elem.id}>{elem.password}</li>
					})}
				</ul>
			</div>
			<button className="btnSubmit" onClick={() => { console.log(props); }}>PUSH</button>
			<div className="form">
				<div>
					<h2>Post</h2>
				</div>
				<PostReduxForm {...props} onSubmit={onAddPostText} />
			</div>
		</section>
	)
}

export default Post;