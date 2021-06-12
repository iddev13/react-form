import HomeReduxForm from './HomeForm';

const Home = (props) => {

	const onAddHomeText = (values) => {
		props.addHomeLogin(values.home)
		console.log(values);
	}

	return (
		<section className="section">

			<div className="homePost">
				<ul>
					{props.homePosts.map(elem => {
						return <li key={elem.id}>{elem.message}</li>
					})}
				</ul>
			</div>
			<button className="btnSubmit" onClick={() => { console.log(props); }}>push</button>
			<div className="form">
				<div>
					<h2>Home</h2>
				</div>
				<HomeReduxForm {...props} onSubmit={onAddHomeText} />
			</div>
		</section>
	)
}

export default Home;