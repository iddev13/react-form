import './Simple.css';
import SimpleReduxForm from './SimpleForm';

const Simple = (props) => {

	const onAddSimpleText = (values) => {
		props.addSimplePost(values);
		console.log(values);
	}

	return (
		<section className="section">
			<ul className="simpleLists">
				{props.simplePost.map(elem => {
					return <li key={elem.id}>
						<span>{elem.firstName}</span>
						<span>{elem.lastName}</span>
						<span>{elem.email}</span>
						<span>{elem.sex}</span>
						<span>{elem.favoriteColor}</span>
						<span>{elem.rememberMe}</span>
						<span>{elem.message}</span>
					</li>
				})}
			</ul>
			<div className="form">
				<div>
					<h2>Simple</h2>
				</div>
				<SimpleReduxForm {...props} onSubmit={onAddSimpleText} />
			</div>
		</section>
	)
}

export default Simple;