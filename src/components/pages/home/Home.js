import HomeReduxForm from './HomeForm';

const Home = (props) => {

	const onAddHomeText = (values) => {
		props.addHomeLogin(values.home)
		console.log(values);
	}

	return (
		<section className="section">
			<h2>Home</h2>
			<div className="homePost">
				<ul>
					{props.homePosts.map(elem => {
						return <li key={elem.id}>{elem.message}</li>
					})}
				</ul>
			</div>
			<button onClick={() => { console.log(props); }}>push</button>
			<div className="form">
				<HomeReduxForm {...props} onSubmit={onAddHomeText} />
			</div>
		</section>
	)
}

export default Home;